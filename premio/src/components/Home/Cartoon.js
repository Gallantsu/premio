/**
 * Auth:suyong
 * Time:2018.10.15
 * Mail:604747817@qq.com
 */
export class Cartoon {
	constructor(options){
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
		this.init();
	}

	init(){
		this.cartoonItems = $(this).find("li");
		this.cartoonLen = this.cartoonItems.length;
		this.currentItem = 0;
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
				
			});

			$(this.nextBtn).bind("click",function(){
				
			});

			this.play();
		}else{
			this.play();
		}
	}

	play(step){
		if(!step){
				
		}
	}

	nextPlay(){

	}

	prevPlay(){

	}


}

