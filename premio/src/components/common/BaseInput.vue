<template>
	<input :class="$style.input" type="text" >
</template>


<style module lang="scss">
	.input{
		height:40px;
		padding:0px 20px;
		border:none;
		border-bottom: 2px solid #1cd1aa;
		color:#fff;
		background:none;
		outline:none;
	    transition: all 0.4s ease-in-out;
	    &:focus{
    	    border-bottom: 2px solid #fff;
	        transition: all 0.4s ease-in-out;
	    }
	}
</style>