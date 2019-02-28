<template>
	<div :class="$style.facts">
		<div class="container">
			<BaseTitle v-bind="titleObj"></BaseTitle>
			<ul>
				<li
				v-for="item in factAry"
				:class="$style['fact-item']"
				>
					<span :class="$style['fact-pencil']">
						<i class="fa fa-pencil fa-lg"></i>
					</span>
					<span :class="$style['fact-num']" >{{item.num}}</span>
					<p :class="$style['fact-text']" >{{item.text}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BaseTitle from '../common/BaseTitle'

	const textAry = [
		{
			num:"500",
			text:"Project Completed"
		},
		{
			num:"254",
			text:"Line Of Codes"
		},
		{
			num:"184",
			text:"Happy Clients"
		},
		{
			num:"35k",
			text:"Km Drive"
		}
	]

	export default {
		data(){
			return {
				titleObj:{
					title:"FUN FACTS",
					subTitle:"Don't Be Vague",
					titleColor:"#fff",
					subTitleColor:"#fff"
				},
				factAry:textAry
			}
		},
		components:{
			BaseTitle
		}
	}
</script>

<style module lang="scss">
	.facts{
		padding-top:150px;
		padding-bottom:150px;
		background:url('../../assets/images/facts-bg.jpg') no-repeat;
	}
	.fact-item{
		width:25%;
		float:left;
		text-align:center;
	}
	.fact-pencil{
		display:inline-block;
		height:100px;
		width:100px;
		margin-bottom:10px;
		line-height:100px;
		border-radius:50%;
		background-color:#2bd4b0;
		i{
			color:#fff
		}
	}
	.fact-num{
		display:block;
		margin-bottom:20px;
		font-size:40px;
		font-weight:bold;
		color:#fff;
	}
	.fact-text{
		font-size:14px;
		color:#fff;
	}
</style> 