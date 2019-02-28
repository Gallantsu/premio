<template>
	<textarea :class="$style.textarea"></textarea>
</template>


<style module lang="scss">
	.textarea{
		height:160px;
		padding: 10px 20px;
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