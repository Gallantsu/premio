/**
 * Auth:suyong
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
			nextBtn:null
		}
		this.opts = Object.assign(this.defaults,options);
		this.init(ele);
	}

	init(ele){
		this.cartoonItems = $(ele).find("li");
		this.cartoonLen = this.cartoonItems.length;
		this.currentIndex = 0;
		this.nextIndex = 1;
	/*	this.cartoonItems.each(function(index){
			$(this).css({zIndex:index});
		})*/

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
			},5000);
		}
		this.switchBg();
	}

	switchBg(){
		this.currentItem = this.cartoonItems.eq(this.currentIndex);
		this.nextItem = this.cartoonItems.eq(this.nextIndex);
	  	let $nearlyElem = this.cartoonItems.not(this.currentItem);
		$nearlyElem.each(function(index){
			$(this).css({zIndex:index});
		})
		this.nextItem.css({zIndex:19});
		if(this.playType == "random"){

		}else{
			this.slideLeft();
		}
	}

	createSlideEle(){
		let backbg = this.currentItem.html();
		let $createdEle = $("<div class='slide-container'></div>");
		$createdEle.html(backbg).css({
	        position: 'absolute',
	        zIndex: 20,
	        left: 0,
	        top: 0,
	        overflow: 'hidden',
	        width: this.opts.cartoonWidth,
	        height: this.opts.cartoonHeight
      	});
      	this.currentItem.empty();
		this.currentItem.append($createdEle).css({zIndex:20});
	}

	slideLeft(){
		this.createSlideEle();
		let moveVal = this.opts.cartoonWidth;
		this.currentItem.velocity({left: moveVal}, {duration: 1000});
	}
}


export {Cartoon}
