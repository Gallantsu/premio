<template>
	<div class="top-banner">
		<ul class="top-bg">
			<li v-for="imgsrc in bgImgs" ><img :src="require('../../assets/images/'+imgsrc+'.jpg')"></li>
		</ul>
		<component :textShow="animateShow" class="animation-container" :is="textComponet"></component>
	</div>
</template>


<script>

/*import slideTransition from './SlideTransition.vue'
import gridTransition from './GridTransition.vue'*/
import TextAnimationOne from './TextAnimationOne.vue'
import {Cartoon}  from './Cartoon.js'

export default {
	data(){
		return{
			bgImgs:["slide-1","slide-2","slide-3"],
			animateShow:false,
			animateIndex:0,
			textComponet:"TextAnimationOne",
			dynamicComponets:[],
			targetSrc:""
		}
	},
	computed:{
		currentSrc(){
			return require("../../assets/images/"+this.imgAry[this.animateIndex]+".jpg");
		}
	},
	components:{
		TextAnimationOne
	},
	methods:{
		hideAnimateDiv(){
			this.animateShow = false;
		}
	},
	mounted(){
		$.fn.cartoon = function(opt){
			return new Cartoon($(this),opt);
		};
		$(".top-bg").cartoon({
			cartoonWidth:document.body.offsetWidth,
			cartoonHeight:800,
			playInterval:15000,
			playType:'random'
		});
		this.animateShow = true;
	}

}

</script>


<style lang='scss'>
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
			.animate-text{
				position:absolute;
				font-weight:bold;
				color:#fff;
				text-transform:uppercase;
			}
		}
	}
</style>