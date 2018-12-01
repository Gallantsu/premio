<template>
	<div 
	:style="divStyle"
	:class="$style.container" >
		<div :class="$style['portfolio-image']">
			<img :src="setSrc" alt="">
		</div>
		<div :class="$style['portfolio-overlay']">
			<a>
				<i class=""></i>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		props:["setWidth","setTop","setLeft","setDisplay","setSrc"],
		computed:{
			divStyle(){
				return {
					width:this.setWidth,
					top:this.setTop,
					left:this.setLeft,
					display:this.setDisplay
				}
			}
		}

	}
</script>

<style module lang="scss">
	.container{
		position:absolute;
		
	}
	.portfolio-image{
		position:relative;
		overflow:hidden;
		img{
			width:100%;
		}
	}
	.portfolio-overlay{
		display:none;
		position:absolute;
		top:0px;
		left:0px;
		width:100%;
		height:100%;
		background-color:rgba(0, 0, 0, 0.8);
		a{
			display:inline-block;
			position:absolute;
			top:50%;
			left:50%;
			width:50px;
			height:50px;
			margin-left:-25px;
			margin-top:-25px;
			border-radius:50%;
			line-height:50px;
			background-color:#1cd1aa;
		}
	}
</style>