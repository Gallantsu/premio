<template>
	<button :class="[$style.btn,$style[buttonStyle]]"><slot /></button>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		props:["btnStyle"],
		computed:{
			buttonStyle(){
				if(this.btnStyle == "blue"){
					return "btn-blue";
				}else if(this.btnStyle == "white"){
					return "btn-white";
				}else{
					return "btn-white";
				}
			}
		}
	}
</script>

<style lang='scss' module> 
	@mixin transition-all($time){
		transition:all ease $time+s;
	}
	.btn{
		margin-right:50px;
		padding:0 50px;
		height:46px;
		font-weight:bold;
		line-height:46px;
		text-transform:uppercase;
		border:none;
		border-radius:30px;
		outline:none;
		cursor:pointer;	
		z-index:25;
	}
	.btn-blue{
		@include transition-all(0.5);
		color:#fff;
		background-color:#1cd1aa;
	}
	.btn-white{
		@include transition-all(0.5);
		color:#1cd1aa;
		background-color:#fff;
	}
	.btn-blue:hover{
		@include transition-all(0.5);
		color:#1cd1aa;
		background-color:#fff;
	}
	.btn-white:hover{
		@include transition-all(0.5);
		color:#fff;
		background-color:#1cd1aa;
	}
</style>