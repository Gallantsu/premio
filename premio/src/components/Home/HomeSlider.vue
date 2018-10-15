<template>
	<div class="top-banner">
		<ul class="top-bg">
			<li v-for="imgsrc in bgImgs"><img :src="require('../../assets/images/'+imgsrc+'.jpg')"></li>
		</ul>
		<component @hide-animate="hideAnimateDiv" :nextSrc="targetSrc"  v-bind:animateShow="animateShow"  v-bind:is="animateComponet"></component>
	</div>
</template>


<script>

import slideTransition from './SlideTransition.vue'
import gridTransition from './GridTransition.vue'

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
		/*let that = this;
		setInterval(()=>{
			//that.animateComponet = that.dynamicComponets[Math.floor(Math.random()*that.dynamicComponets.length)];
			//that.animateComponet = "gridTransition";
			that.targetSrc = that.currentSrc;
			that.animateShow = true;
			that.animateIndex++;
			if(that.animateIndex>=3){
				that.animateIndex = 0;
			}

		},5000)*/
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
		}
		.top-bg img{
			position:absolute;
			top:0px;
			left:0px;
			width:100%;
			height:100%;
			z-index:19
		}
	}
</style>