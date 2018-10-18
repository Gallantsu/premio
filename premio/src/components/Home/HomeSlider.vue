<template>
	<div class="top-banner">
		<ul class="top-bg">
			<li v-for="imgsrc in bgImgs" ><img :src="require('../../assets/images/'+imgsrc+'.jpg')"></li>
		</ul>
		<!-- <component @hide-animate="hideAnimateDiv" :nextSrc="targetSrc"  v-bind:animateShow="animateShow"  v-bind:is="animateComponet"></component> -->
	</div>
</template>


<script>

import slideTransition from './SlideTransition.vue'
import gridTransition from './GridTransition.vue'
import {Cartoon}  from './Cartoon.js'

export default {
	data(){
		return{
			bgImgs:["slide-1","slide-2","slide-3"],
			animateShow:false,
			animateIndex:0,
			animateComponet:"gridTransition",
			dynamicComponets:["slideTransition","gridTransition"],
			targetSrc:""
		}
	},
	computed:{
		currentSrc(){
			return require("../../assets/images/"+this.imgAry[this.animateIndex]+".jpg");
		}
	},
	components:{
		slideTransition,
		gridTransition
	},
	methods:{
		hideAnimateDiv(){
			this.animateShow = false;
		}
	},
	mounted(){
		$.fn.cartoon = function(opt){
			return new Cartoon($(this),opt);
		}
		$(".top-bg").cartoon({
			cartoonWidth:document.body.offsetWidth,
			cartoonHeight:800,
			playInterval:10000,
			playType:'random'
		})
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
	}
</style>