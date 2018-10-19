<template>
	<div>
		<transition name="slide-text1">
			<p class="animate-text text-top font-35 letter-space-4" v-show="textShow" >Feel the magic of Creative Design</p>
		</transition>
		<transition name="slide-text2">
			<p class="animate-text text-middle font-70 letter-space-4 cyan" v-show="textShow" >Welcome To Premio</p>
		</transition>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		props:{
			textShow:{
				type:Boolean,
				required:true
			}
		},
		methods:{

		}
	}
</script>


<style lang="scss" >
	
	.text-top{
		position:absolute;
		left:120px;
		top:350px;
		opacity:1;
	}
	
	.text-middle{
		position:absolute;
		left:120px;
		top:380px;
		opacity:1;
	}
	
	.slide-text1-enter,
	.slide-text2-enter{
		position:absolute;
		left:120px;
		top:0px;
		opacity:0;
	}
	.slide-text1-enter-active{
		transition:all 1s;
	}
	.slide-text2-enter-active{
		transition:all 1s ease 1s;
	}
</style>