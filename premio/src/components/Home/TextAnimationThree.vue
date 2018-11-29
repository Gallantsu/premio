<template>
	<div>
		<transition name="slide-text9">
			<TextFont45 :class="$style['text-top']" v-show="show" >Only The Crumbliest Flakiest</TextFont45>
		</transition>
		<transition name="slide-text10">
			<TextFont45 :class="$style['text-middle']" v-show="show" >Corporate business</TextFont45>
		</transition>
		<transition name="slide-text11">
			<TextItalic :class="$style['text-bottom']" v-show="show" >We are driven by creating experiences that deliver results for your business
              and for your <br>
              consumers. Our approach is simple and iterative.Sed ut perspiciatis unde omnis.</TextItalic>
		</transition>
		<transition name="slide-text12">
			<p :class="$style['text-btn']" v-show="show">
				<BaseButton btnStyle="blue">PURCHASE NOW</BaseButton>
			</p>
		</transition>
	</div>
</template>

<script>
	import TextFont45 from '../common/TextFont45'
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
				return this.textShow == 3?true:false;
			}
		},
		components:{
			BaseButton,
			TextFont45,
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
		left:0px;
		top:360px;
		width:100%;
		color:#fff;
		text-align:center;
	}
	
	.text-middle{
		@include hidden-abs;
		top:410px;
		width:100%;
		color:#1cd1aa;
		text-align:center;
	}
	.text-bottom{
		@include hidden-abs;
		top:480px;
		width:100%;
		text-align:center;
	}
	.text-btn{
		@include hidden-abs;
		top:560px;
		width:100%;
		text-align:center;
		z-index: 25;
	}
</style>
<style scope lang="scss" >
	@mixin base{
		display:block;
		position:absolute;
		left:-100%;
		width: 100%;
		text-align:center; 
		opacity:0;
	}
	.slide-text9-enter{
		@include base;
		top:360px;
	}
	.slide-text10-enter{
		@include base;
		top:410px;
	}
	.slide-text11-enter{
		@include base;
		top:410px;
	}
	.slide-text12-enter{
		@include base;
		top:490px;
	}
	.slide-text9-enter-active{
		transition:all 1s;
	}
	.slide-text10-enter-active{
		transition:all 1s ease 1s;
	}
	.slide-text11-enter-active{
		transition:all 1s ease 2s;
	}
	.slide-text12-enter-active{
		transition:all 1s ease 3s;
	}
</style>