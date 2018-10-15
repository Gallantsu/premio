/**
 * Auth:suyong
 * Time:2018.10.15
 * Mail:604747817@qq.com
 */
class Cartoon {
	constructor(options){
		this.defaults={
			cartoonWidth:1200,
			cartoonHeight:800,
			autoPlay:true,
			playInterval:5000,
			playType:'random',
			isControlled:false,
			prevBtn:null,
			nextBtn:null
		}
		this.opts = Object.assign(this.defaults,options);
		this.init();
	}

	init(){
		this.cartoonItems = $(this).find("li");
		this.cartoonLen = this.cartoonItems.length;
		
	}

	nextPlay(){
		
	}

	prevPlay(){
		
	}


}