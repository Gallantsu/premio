<template>
	<div :class="$style.heading">
		<h4 :style="{color:titleColor}" :class="$style.title">{{title}}</h4>
		<span  :style="{color:subTitleColor}"  :class="$style.subTitle" >{{subTitle}}</span>
		<hr :class="$style.hr">
	</div>
</template>

<script>
	export default {
		props:["title","subTitle","titleColor","subTitleColor"],
	}
</script>

<style module lang="scss" >
	.heading{
		margin-bottom:80px;
		width:100%;
		text-align:center;
	}
	.title{
		margin:10px 0px;
		font-weight:600;
		font-size:30px;
		line-height:1.1;
		color:#252525;
	    letter-spacing: 4px;
        text-align: center;
	}
	.subTitle{
		display:inline-block;
		font-size:18px;
	    text-align: center;
		line-height:1.5;
		color:#1cd1aa;
	}
	.hr{
		height: 1px;
	    border: none;
	    border-top: 1px solid #1cd1aa;
	    border-bottom: 1px solid #1cd1aa;
	    margin: 15px auto;
	    width: 50px;
	    box-sizing:content-box;
	}
</style>