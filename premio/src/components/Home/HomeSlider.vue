<template>
	<div class="top-banner" >
		<ul class="top-bg">
			<li v-for="imgsrc in bgImgs" ><img :src="require('../../assets/images/'+imgsrc+'.jpg')"></li>
		</ul>
		<TextAnimationOne :textShow="animateShow" ></TextAnimationOne>
		<TextAnimationTwo  :textShow="animateShow"  ></TextAnimationTwo>
		<TextAnimationThree  :textShow="animateShow"  ></TextAnimationThree>
		<div class="banner-prev" @click="carousel('prev')" >
			<span class="carousel-control carousel-prev" ></span>
		</div>
		<div class="banner-next" @click="carousel('next')" >
			<span class="carousel-control carousel-next"  ></span>
		</div>
	</div>
</template>


<script>

/*import slideTransition from './SlideTransition.vue'
import gridTransition from './GridTransition.vue'*/
import TextAnimationOne from './TextAnimationOne.vue'
import TextAnimationTwo from './TextAnimationTwo.vue'
import TextAnimationThree from './TextAnimationThree.vue'
import {Cartoon}  from './Cartoon.js'

export default {
	data(){
		return{
			bgImgs:["slide-1","slide-2","slide-3"],
			animateShow:0,
			animateIndex:0,
			targetSrc:""
		}
	},
	computed:{
		
	},
	components:{
		TextAnimationOne,
		TextAnimationTwo,
		TextAnimationThree
	},
	methods:{
		carousel(action){
			this.cartoon.play(action);
		}
	},
	mounted(){
		$.fn.cartoon = function(opt){
			return new Cartoon($(this),opt);
		};
		let animateNum = 1;
		const that = this;
		//动画开始
		this.cartoon = $(".top-bg").cartoon({
			cartoonWidth:document.body.offsetWidth,
			cartoonHeight:800,
			playInterval:15000,
			playType:'random',
			animationBeforeFun:function(step){
				that.animateShow = 0;
			},
			animationAfterFun:function(step){
				if(step == "next"){
					animateNum++;
					if(animateNum>3){
						animateNum = 1;
					}
				}else{
					animateNum--;
					if(animateNum<1){
						animateNum = 3;
					}
				}
			
				that.animateShow = animateNum;
			}
		});
		this.animateShow = animateNum;
	}

}

</script>


<style lang='scss'>
	@mixin hidden-abs{
		position:absolute;
	}
	.top-banner{
		position: relative;
		width: 100%;
		height: 800px;
		.top-bg{
			position:relative;
			width:100%;
			height:100%;
			overflow:hidden;
			li{
				position:absolute;
				top:0px;
				left:0px;
				margin:0px;
				padding:0px;
				width:100%;
				height:100%;
			}
		}
		.top-bg li img{
			width:100%;
			height:100%;
		}
		.animation-container{
			position:absolute;
			top:0px;
			left:0px;
			width:100%;
			height:100%;
			z-index:100;
		}
	}
	.banner-prev{
		position:absolute;
		top:400px;
		left:0px;
		width:100px;
		height:100px;
		background-color:#000;
		opacity:0.15;
		z-index:101;
		cursor: pointer;
		transition: all 0.5s ease;
		&:hover{
			transition: all 0.5s ease;
			opacity:0.5;
		}
	}
	.banner-next{
		position:absolute;
		top:400px;
		right:0px;
		width:100px;
		height:100px;
		background-color:#000;
		opacity:0.15;
		z-index:101;
		cursor: pointer;
		transition: all 0.5s ease;
		&:hover{
			transition: all 0.5s ease;
			opacity:0.3;
		}
	}
	.carousel-control{
		display:inline-block;
		position:absolute;
		top:50%;
		left:50%;
		width:18px;
		height:32px;
		margin-top:-16px;
	}
	.carousel-prev{
		background:url("../../assets/images/left.png") no-repeat;
		margin-left:-9px;
	}
	.carousel-next{
		background:url("../../assets/images/right.png") no-repeat;
		margin-right:-9px;
	}
</style>