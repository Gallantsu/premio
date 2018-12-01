<template>
	<div class="container padding-top-150">
		<BaseTitle 
		:title="title" 
		:subTitle="subTitle">
		</BaseTitle>
		<ul class="clear-float">
			<li  
			v-for="(item,index) in listAry"  
			:key="index"
			:class="$style['offer-list']" >
				<img :src="item.img">
				<h5>{{item.title}}</h5>
				<hr>
				<p>{{item.content}}</p>
				<a href="javascript:void (0);">READ MORE <i class="fa fa-long-arrow-right"></i></a>
			</li>
		</ul>
	</div>
</template>

<script>

	import BaseTitle from '../common/BaseTitle'

	const listAry = [
		{
			img:require("../../assets/images/offer-img-1.jpg"),
			title:"WHAT WE DO",
			content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet felis at turpis aliquam maximus. Cras nec mauris ex. Aliquam nibh felis."
		},
		{
			img:require("../../assets/images/offer-img-2.jpg"),
			title:"WHO WE ARE",
			content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet felis at turpis aliquam maximus. Cras nec mauris ex. Aliquam nibh felis."
		},
		{
			img:require("../../assets/images/offer-img-3.jpg"),
			title:"HOW WE WORK",
			content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet felis at turpis aliquam maximus. Cras nec mauris ex. Aliquam nibh felis."
		}
	]

	export default {
		data(){
			return {
				title:"WHAT WE OFFER",
				subTitle:"Creative Design",
				listAry:listAry
			}
		},
		components:{
			BaseTitle
		}
	}
</script>

<style module lang="scss" >
	
	.offer-list{
		float:left;
		width:33.33333333%;
		padding-left:15px;
		padding-right:15px;
		img{
			width:100%;
			height:auto;
		}
		h5{
			margin-top:20px;
			font-size:20px;
			font-weight:bolder;
			color:#252525;
		}
		hr{
			margin:15px 0px;
			height:2px;
			width:30px;
			border:none;
			background-color:#2bd4b0;
		}
		p{
			font-size:14px;
			line-height:24px;
			color:#6f6f6f;
		}
		a{
			display:inline-block;
			margin-top:20px;
			font-size:12px;
			color:#1cd1aa;
			text-decoration: none;
			i{
				margin-left:10px;
			}
		}
	}
</style>