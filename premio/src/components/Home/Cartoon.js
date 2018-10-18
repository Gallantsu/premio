/**
 * Auth:ddd
 * Time:2018.10.15
 * Mail:604747817@qq.com
 */
import 'velocity-animate'

class Cartoon {
	constructor(ele,options){
		this.defaults={
			cartoonWidth:1200,
			cartoonHeight:800,
			playInterval:5000,
			playType:'random',
			isControlled:false, //是否有按钮控制页面动画切换
			prevBtn:null,
			nextBtn:null,
			animationTypes:[
				"slideLeft",
				"slideRight",
				"slideUp",
				"slideDown",
				"shutterVerticalSeparate",
				"shutterVerticalUp",
				"shutterVerticalDown",
				"shutterHorizontalSeparate",
				"shutterHorizontalLeft",
				"shutterHorizontalRight",
				"gridSwitch",
				"gridLittle"
			] //可以自定义动画类型
		}
		this.opts = Object.assign(this.defaults,options);
		this.init(ele);
	}

	init(ele){
		this.cartoonItems = $(ele).find("li");
		this.cartoonLen = this.cartoonItems.length;
		this.currentIndex = 0;
		this.nextIndex = 1;
		this.cartoonItems.each(function(index){
			$(this).css({zIndex:index});
		});
		this.cartoonItems.eq(this.currentIndex).css({zIndex:20})

		//有按钮时绑定按钮事件
		if(this.isControlled){
			if(!prevBtn){
				throw new Error("Please sure the prev button"); 
				return;
			}
			if(!nextBtn){
				throw new Error("Please sure the next button"); 
				return;
			}

			$(this.prevBtn).bind("click",function(){
				this.play("prev");
			});

			$(this.nextBtn).bind("click",function(){
				this.play("next");
			});

			this.play();
		}else{
			this.play();
		}
	}

	play(step){
		if(step === "next"){
			this.nextIndex = this.currentIndex + 1 > (this.cartoonLen-1)?0:this.currentIndex + 1;
		}else if(step === "prev"){
			this.nextIndex = this.currentIndex - 1 < 0?(this.cartoonLen-1):this.currentIndex - 1;
		}else{
			return this.animation = setInterval(()=>{
				this.play("next");
			},this.opts.playInterval);
		}
		this.switchBg();
	}

	getRandomNum(){
		return Math.floor(Math.random()*this.opts.animationTypes.length);
	}

	//根据类型变换动画
	switchBg(){
		this.currentItem = this.cartoonItems.eq(this.currentIndex);
		this.nextItem = this.cartoonItems.eq(this.nextIndex);
		this.backbg = this.currentItem.html();
		this.nextItem.css({zIndex:19});
		let playType = this.opts.playType;
		if(playType == "random"){
			let num = this.getRandomNum();
			this[this.opts.animationTypes[num]]();
		}else{
			this[playType]();
		}
	}

	//将元素复原
	recovery(interval){
		setTimeout(()=>{
			this.currentItem.html(this.backbg).css("zIndex",this.currentIndex);
			this.nextItem.css("zIndex",20);
			this.currentIndex = this.nextIndex;
		},interval);
	}

	//滑动动画
	slide(target){
		let $createdEle = $("<div class='slide-container'></div>");
		$createdEle.html(this.backbg).css({
	        position: 'absolute',
	        zIndex: 20,
	        left: 0,
	        top: 0,
	        overflow: 'hidden',
	        width: this.opts.cartoonWidth,
	        height: this.opts.cartoonHeight
      	});
      	$createdEle.find('img').css({
	        display: 'block',
	        width: this.opts.cartoonWidth,
	        height:this.opts.cartoonHeight
      	});
      	this.currentItem.empty();
		this.currentItem.append($createdEle);
		$createdEle.velocity(target, {duration: 1000});
		this.recovery(1000);
	}

	slideLeft(){
		let moveVal = this.opts.cartoonWidth;
		let target = {
			left:-moveVal
		}
		this.slide(target);
	}

	slideRight(){
		let moveVal = this.opts.cartoonWidth;
		let target = {
			left:moveVal
		}
		this.slide(target);
	}

	slideUp(){
		let moveVal = this.opts.cartoonHeight;
		let target = {
			top:-moveVal
		}
		this.slide(target);
	}

	slideDown(){
		let moveVal = this.opts.cartoonHeight;
		let target = {
			top:moveVal
		}
		this.slide(target);
	}

	//竖向百叶窗式动画
	shutterVertical(num){
		this.currentItem.empty();
		let cartoonWidth = this.opts.cartoonWidth;
		let cartoonHeight = this.opts.cartoonHeight;
		//建立区块
		const devideNum = 18;
		for(let i = 0; i < devideNum; i++){
			let $createdEle = $("<div class='shutter-container'></div>")
			$createdEle.html(this.backbg).css({
		        position: 'absolute',
		        zIndex: 20,
		        left: parseInt(cartoonWidth/devideNum)*i,
		        top: 0,
		        overflow: 'hidden',
		        width: parseInt(cartoonWidth/devideNum),
		        height: cartoonHeight
      		});
      		$createdEle.find("img").css({
      			marginLeft:Number.parseInt(cartoonWidth/-devideNum)*(i)+"px",
      			width: cartoonWidth,
	        	height:cartoonHeight,
	        	display:"block"
      		})
      		this.currentItem.append($createdEle);
		}

		let moveVal = cartoonHeight;

		switch(num){
    		case 0:
    			this.currentItem.find(".shutter-container").each(function(index){
    				if(index%2){
    					moveVal = -cartoonHeight;
    				}else{
    					moveVal = cartoonHeight;
    				}
    				$(this).velocity({
    					top:moveVal
    				},{
    					duration: 1000
    				})
    			});
    			this.recovery(1000);
    			break;
			case 1:
				this.currentItem.find(".shutter-container").each(function(index){
    				$(this).velocity({
    					top:moveVal
    				},{
    					duration: 120+55*index
    				})
    			});
    			this.recovery(1110);
        		break;
			case 2:
				this.currentItem.find(".shutter-container").each(function(index){
    				$(this).velocity({
    					top:-moveVal
    				},{
    					duration: 120+55*index
    				})
    			});
				this.recovery(1110);
				break;
    	}

	}

	shutterVerticalSeparate(){
		this.shutterVertical(0);
	}

	shutterVerticalDown(){
		this.shutterVertical(1);
	}

	shutterVerticalUp(){
		this.shutterVertical(2);
	}

	//横向百叶窗动画
	shutterHorizontal(num){
		this.currentItem.empty();
		let cartoonWidth = this.opts.cartoonWidth;
		let cartoonHeight = this.opts.cartoonHeight;
		//建立区块
		const devideNum = 12;
		for(let i = 0; i < devideNum; i++){
			let $createdEle = $("<div class='shutter-container'></div>")
			$createdEle.html(this.backbg).css({
		        position: 'absolute',
		        zIndex: 20,
		        left: 0,
		        top: parseInt(cartoonHeight/devideNum)*i,
		        overflow: 'hidden',
		        width: cartoonWidth,
		        height: parseInt(cartoonHeight/devideNum)
      		});
      		$createdEle.find("img").css({
      			marginTop:Number.parseInt(cartoonHeight/-devideNum)*(i)+"px",
      			width: cartoonWidth,
	        	height:cartoonHeight,
	        	display:"block"
      		})
      		this.currentItem.append($createdEle);
		}

		let moveVal = cartoonWidth;

		switch(num){
    		case 0:
    			this.currentItem.find(".shutter-container").each(function(index){
    				if(index%2){
    					moveVal = -cartoonWidth;
    				}else{
    					moveVal = cartoonWidth;
    				}
    				$(this).velocity({
    					left:moveVal
    				},{
    					duration: 1000
    				})
    			});
    			this.recovery(1000);
    			break;
			case 1:
				this.currentItem.find(".shutter-container").each(function(index){
    				$(this).velocity({
    					left:-moveVal
    				},{
    					duration: 120+80*index
    				})
    			});
    			this.recovery(1080);
        		break;
			case 2:
				this.currentItem.find(".shutter-container").each(function(index){
    				$(this).velocity({
    					left:moveVal
    				},{
    					duration: 120+80*index
    				})
    			});
				this.recovery(1080);
				break;
    	}

	}

	shutterHorizontalSeparate(){
		this.shutterHorizontal(0);
	}

	shutterHorizontalLeft(){
		this.shutterHorizontal(1);
	}

	shutterHorizontalRight(){
		this.shutterHorizontal(2);
	}

	gridSwitch(){
		this.currentItem.empty();
		let cartoonWidth = this.opts.cartoonWidth;
		let cartoonHeight = this.opts.cartoonHeight;
		const cols = 7; //必须为奇数
		const rows = 6;
		for(let i = 0,total = cols*rows; i < total; i++){
			let $createdEle = $("<div class='grid-container'></div>");
			$createdEle.html(this.backbg).css({
		        position: 'absolute',
		        zIndex: 20,
		        left: parseInt(cartoonWidth/cols)*(i%cols),
		        top: parseInt(cartoonHeight/rows)*Math.floor(i/cols),
		        overflow: 'hidden',
		        width: parseInt(cartoonWidth/cols),
		        height: parseInt(cartoonHeight/rows)
      		});
      		$createdEle.find("img").css({
      			marginTop:-(this.cartoonHeight / rows) * Math.floor(i / cols),
      			marginLeft:-parseInt(cartoonWidth/cols)*(i%cols),
      			width: cartoonWidth,
	        	height:cartoonHeight,
	        	display:"block"
      		});
      		this.currentItem.append($createdEle);
		}
		this.currentItem.find('.grid-container').each(function (i) {
        	if (i % 2 === 0) {
	          $(this).find("img").velocity({
	            marginLeft: $(this).width()
	          }, {duration: 500});
        	}
      	});
		let that = this;
      	setTimeout(function () {
	        that.currentItem.find('.grid-container').each(function (i) {
	          if (i % 1 === 0) {
	            $(this).find("img").velocity({
	              marginLeft: $(this).width()
	            }, {duration: 500});
	          }
	        });
      		}, 600);
      	this.recovery(1200);
	}

	tab(arr, x, y, fn, delay, speedX, speedY) {
		let self = this;
	  	if (!arr[y] || !arr[y][x]) {
	    	return;
	  	}

	  	if (fn) {
	    	fn.call(arr[y][x]);

	    	clearTimeout(arr[y][x].timer);
	    	arr[y][x].timer = setTimeout(function () {
	      		self.tab(arr, x, y + speedY, fn, delay, speedX, speedY);
	      		self.tab(arr, x + speedX, y, fn, delay, speedX, speedY);
	    }, delay);
	  }
	}

	getXY(objs, rows, cols) {
	  var arr1 = [];

	  for (var i = 0; i < rows; i ++) {
	    var arr2 = [];

	    for (var j = 0; j < cols; j ++) {
	      objs[i * cols + j].xIndex = j;
	      objs[i * cols + j].yIndex = i;

	      arr2.push(objs[i * cols + j]);
	    }

	    arr1.push(arr2);
	  }

	  return arr1;
	}

	gridLittle(){
		this.currentItem.empty();
		let self = this;
      	let coordinate = null;
      	let cartoonWidth = this.opts.cartoonWidth;
		let cartoonHeight = this.opts.cartoonHeight;

      	this.nextItem.css('zIndex', 19);

      	for (let i = 0; i < 24; i ++) {
        	let $createdElem = $('<div class="grid-container"></div>');

	        $createdElem.html(this.backbg).css({
	        	position:"absolute",
          		width: parseInt(cartoonWidth / 6),
	          	height: parseInt(cartoonHeight / 4),
	          	left: parseInt(cartoonWidth / 6) * (i % 6),
	          	top: parseInt(cartoonHeight / 4) * Math.floor(i / 6),
	          	zIndex:20,
	          	overflow:"hidden"
	        });

        	$createdElem.find('img').css({
	          	display: 'block',
	          	width: cartoonWidth,
	          	height: cartoonHeight,
	          	marginLeft: -parseInt(cartoonWidth / 6) * (i % 6),
	          	marginTop: -parseInt(cartoonHeight / 4) * Math.floor(i / 6)
       		});

       		this.currentItem.append($createdElem);
      	}

      	coordinate = this.getXY(this.currentItem.find('.grid-container'), 4, 6);

      	this.tab(coordinate, 0, 0, function () {
	        var left = parseInt(this.style.left);
	        var top = parseInt(this.style.top);

	        $(this).velocity({
	          	left: left + 200,
	          	top: top + 200,
	          	opacity: 0
	        });
      	}, 100, +1, +1);

      	this.recovery(1200);
	}
}

export {Cartoon}
