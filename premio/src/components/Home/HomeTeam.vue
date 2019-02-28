<template>
	<div class="padding-top-150 padding-bottom-150">
		<BaseTitle 
		:title="title" 
		:subTitle="subTitle"
		>
		</BaseTitle>
		<div class="container">
			<div 
			:class="$style['team-member']"
			v-for="member in membersAry"
			>	
				<div>
					<img :src="member.src" alt="">
					<div :class="$style.introduction">
						<h5>{{member.name}}</h5>
						<span>{{member.job}}</span>
						<p>
							<a><i class="fa fa-facebook"></i></a>
							<a><i class="fa fa-twitter"></i></a>
							<a><i class="fa fa-dribbble"></i></a>
						</p>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import BaseTitle from '../common/BaseTitle'

	const membersAry = [
		{
			name:"ALEX JONES",
			job:"Code Worrior",
			src:require("../../assets/images/member-1.jpg")
		},
		{
			name:"ALEX JONES",
			job:"Code Worrior",
			src:require("../../assets/images/member-2.jpg")
		},
		{
			name:"ALEX JONES",
			job:"Code Worrior",
			src:require("../../assets/images/member-3.jpg")
		}
	]

	export default {
		data(){
			return {
				title:"OUR TEAM",
				subTitle:"The Top Pick... Team Members",
				membersAry:membersAry
			}
		},
		components:{
			BaseTitle
		}
	}
</script>

<style module lang="scss" >
	.team-member{
		position:relative;
		float:left;
		width:33.333%;
		padding:0 15px;
		cursor:pointer;
		&>div{
			position:relative;
			overflow:hidden;
		}
		img{
			width:100%;
			vertical-align:middle;
		}
		&:hover .introduction{
			transition:bottom 0.4s ease-out;
			bottom:0px;
		}
	}
	.introduction{
		position:absolute;
		left:0px;
		bottom:-100%;
		width:100%;
		padding:20px 0px;
		text-align:center;
		background-color:rgba(0,0,0,0.7);
		transition:bottom 0.4s ease-out;
		h5{
			font-weight:bold;
			color:#fff;
		}
		span{
			display:inline-block;
			font-size:12px;
			color:#1cd1aa;
			margin-bottom:20px;
		}
		i{	
			margin:0px 10px;
			color:#fff;
		}
	}
</style>