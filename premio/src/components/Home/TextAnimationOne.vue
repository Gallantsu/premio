<template>
	<div>
		<transition name="slide-text1">
			<TextFont35 :class="$style['text-top']" v-show="show" >Feel the magic of Creative Design</TextFont35>
		</transition>
		<transition name="slide-text2">
			<TextFont70 :class="$style['text-middle']" v-show="show" >Welcome To Premio</TextFont70>
		</transition>
		<transition name="slide-text3">
			<TextItalic :class="$style['text-bottom']" v-show="show" >You'll Look a Little Lovelier Each Day with Fabulous Pink Creative design</TextItalic>
		</transition>
		<transition name="slide-text4">
			<p :class="$style['text-btn']" v-show="show">
				<BaseButton btnStyle="blue">buy theme</BaseButton>
				<BaseButton btnStyle="white">Get Started</BaseButton>
			</p>
		</transition>
	</div>
</template>

<script>
	import TextFont35 from '../common/TextFont35'
	import TextFont70 from '../common/TextFont70'
	import TextItalic from '../common/TextItalic'
	import BaseButton from '../common/BaseButton'

	export default {
		data(){
			return {

			}
		},
		props:{
			textShow:{
				type:Number,
				required:true
			}
		},
		methods:{

		},
		computed:{
			show(){
				return this.textShow == 1?true:false;
			}
		},
		components:{
			BaseButton,
			TextFont35,
			TextFont70,
			TextItalic
		}
	}
</script>


<style lang="scss" module>
	@mixin hidden-abs{
		display:block;
		position:absolute;
		opacity:1;
	}
	.text-top{
		@include hidden-abs;
		left:100px;
		top:360px;
	}
	
	.text-middle{
		@include hidden-abs;
		left:100px;
		top:390px;
	}
	.text-bottom{
		@include hidden-abs;
		left:100px;
		bottom:270px;
	}
	.text-btn{
		@include hidden-abs;
		left:100px;
		bottom:190px;
		z-index: 25;
	}
</style>
<style scope >
	.slide-text1-enter,
	.slide-text2-enter{
		display:block;
		position:absolute;
		left:120px;
		top:0px;
		opacity:0;
	}
	.slide-text3-enter,
	.slide-text4-enter{
		display:block;
		position:absolute;
		left:120px;
		bottom:0px;
		opacity:0;
	}
	.slide-text1-enter-active{
		transition:all 1s;
	}
	.slide-text2-enter-active{
		transition:all 1s ease 1s;
	}
	.slide-text3-enter-active{
		transition:all 1s ease 2s;
	}
	.slide-text4-enter-active{
		transition:all 1s ease 3s;
	}
</style>