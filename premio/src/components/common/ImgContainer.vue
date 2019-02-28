<template>
	<div 
	:style="divStyle"
	:class="$style.container"
	ref="rootEl"
	>
		<div :class="$style['portfolio-image']">
			<img :src="setSrc" alt="">
		</div>
		<div :class="$style['portfolio-overlay']">
			<a>
				<i class="fa fa-link fa-lg" ></i>
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
		overflow:hidden;
		&:hover img{
			transition: all 400ms ease-out;
			transform: scale(1.1);
		}
		&:hover .portfolio-overlay{
			transition: all 400ms ease-out;
			opacity:1;
		}
	}
	.portfolio-image{
		position:relative;
		overflow:hidden;
		img{
			transition: all 400ms ease-out;
			width:100%;
		    vertical-align: middle;
		}
	}
	.portfolio-overlay{
		position:absolute;
		top:0px;
		left:0px;
		width:100%;
		height:100%;
		opacity:0;
		background-color:rgba(0, 0, 0, 0.8);
		transition: all 400ms ease-out;
		overflow: hidden;
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
			text-align:center;
			background-color:#1cd1aa;
			cursor:pointer;
		}
		i{
			color:#fff;
		}
	}
</style>