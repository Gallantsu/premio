<template>
	<div :class="$style['news-container']">
		<div class="container">
			<BaseTitle v-bind="titleObj"></BaseTitle>
			<ul>
				<li
				v-for="item in newsAry"
				:class="$style['news-li']"
				>
					<div :class="$style['news-list']">
						<img :src="item.src" alt="">
						<div :class="$style['text-box']">
							<time><i class="fa fa-calendar-check-o"></i>{{item.date}}</time>
							<span :class="$style.title">{{item.text}}</span>
							<span :class="$style.more">READ MORE <i class="fa fa-long-arrow-right"></i></span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

	import BaseTitle from '../common/BaseTitle'

	const newsAry = [
		{
			src:require("../../assets/images/post-img-1.jpg"),
			date:"Aug 29, 2015",
			text:"It's Good To Talk Photography"
		},
		{
			src:require("../../assets/images/post-img-2.jpg"),
			date:"Aug 29, 2015",
			text:"It's Good To Talk Photography"
		},
		{
			src:require("../../assets/images/post-img-3.jpg"),
			date:"Aug 29, 2015",
			text:"It's Good To Talk Photography"
		}
	]

	export default {
		data(){
			return {
				titleObj:{
					title:"LATEST NEWS",
					subTitle:"Don't Be Vague"
				},
				newsAry:newsAry
			}
		},
		components:{
			BaseTitle
		}
	}
</script>

<style module lang="scss" >
	.news-container{
		padding-top:100px;
		padding-bottom:100px;
		background-color:#f6f7f8; 
	}
	.news-li{
		float:left;
		width:33.333%;
		padding:0px 15px;
		
	}
	.news-list{
		position:relative;
		background-color:#fff;
		img{
			width:100%;
		}
	}
	.text-box{
		width:100%;
		padding:25px 0px;
		text-align:center;
		time{
			font-size:12px;
			color:#576363;
			i{
				margin-right:10px;
			}
		}
		.title{
			display:block;
			margin-bottom:10px;
			font-size:16px;
			font-weight:bold;
		    text-transform: uppercase;
		    color:#333333;
		}
		.more{
			display:block;
			font-size:12px;
			color:#141414;
			transition:all 0.4s ease;
			i{
				margin-left:10px;
			}
			&:hover{
				color:#1cd1aa;
				cursor:pointer;
				transition:all 0.4s ease;
			}
		}
	}
</style>