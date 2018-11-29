<template>
	<div>
		<transition name="slide-text5">
			<TextFont35 :class="$style['text-top']" v-show="show" >Our Premio will give you softer skin</TextFont35>
		</transition>
		<transition name="slide-text6">
			<TextFont70 :class="$style['text-middle']" v-show="show" >We Deal With Creative Design</TextFont70>
		</transition>
		<transition name="slide-text7">
			<TextItalic :class="$style['text-bottom']" v-show="show" >Premio Stays Sharp 'til The Bottom of the Glass, Nunc mattis vitae dui ut eleifend.</TextItalic>
		</transition>
		<transition name="slide-text8">
			<p :class="$style['text-btn']" v-show="show">
				<BaseButton btnStyle="blue">Buy Theme</BaseButton>
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
				return this.textShow == 2?true:false;
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
		top:410px;
	}
	.text-bottom{
		@include hidden-abs;
		left:100px;
		bottom:260px;
	}
	.text-btn{
		@include hidden-abs;
		left:100px;
		bottom:190px;
		z-index: 25;
	}
</style>
<style scope >
	.slide-text5-enter,
	.slide-text6-enter{
		display:block;
		position:absolute;
		left:120px;
		top:0px;
		opacity:0;
	}
	.slide-text7-enter,
	.slide-text8-enter{
		display:block;
		position:absolute;
		left:120px;
		bottom:0px;
		opacity:0;
	}
	.slide-text5-enter-active{
		transition:all 1s;
	}
	.slide-text6-enter-active{
		transition:all 1s ease 1s;
	}
	.slide-text7-enter-active{
		transition:all 1s ease 2s;
	}
	.slide-text8-enter-active{
		transition:all 1s ease 3s;
	}
</style>