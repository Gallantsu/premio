<template>
	<div 
	class="padding-top-150 padding-bottom-150"
	:class="$style['contact-container']"
	>
		<BaseTitle v-bind="titleObj"></BaseTitle>
		<div class="container">
			<div  :class="$style['cantact-left']">
				<div class="clear-float">
					<div :class="$style['input-box']">
						<span :class="$style.span">*name</span>
						<BaseInput :class="$style['input']"></BaseInput>
					</div>
					<div :class="$style['input-box']">
						<span :class="$style.span">*Email</span>
						<BaseInput :class="$style['input']"></BaseInput>
					</div>
				</div>
				<div :class="$style['area-box']">
					<span :class="$style.span">*Message</span>
					<BaseArea :class="$style.area"></BaseArea>
				</div>
				<BaseButton :class="$style['submit-btn']" btnStyle="blue">SEND NOW <i class="fa fa-long-arrow-right"></i></BaseButton>
			</div>
			<div :class="$style['cantact-right']">
				<ul>
					<li :class="$style['cantact-item']">
						<div :class="$style['media-left']">
							<i class="fa fa-envelope"></i>
						</div>
						<div :class="$style['media-right']">
							<h5>EMAIL</h5>
							<p>premio@.co.uk</p>
							<p>domain@.co.uk</p>
						</div>
					</li>
					<li :class="$style['cantact-item']">
						<div :class="$style['media-left']">
							<i class="fa fa-map-marker"></i>
						</div>
						<div :class="$style['media-right']">
							<h5>ADDRESS</h5>
							<p>Andrew Cross 50 Front Street KNOTTY</p>
							<p>GREEN HP9 2WB</p>
						</div>
					</li>
					<li :class="$style['cantact-item']">
						<div :class="$style['media-left']">
							<i class="fa fa-phone"></i>
						</div>
						<div :class="$style['media-right']">
							<h5>PHONE</h5>
							<p>+44 078-5099-1689</p>
							<p>+44 078-5099-1859</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseTitle from '../common/BaseTitle'
	import BaseInput from '../common/BaseInput'
	import BaseArea from '../common/BaseArea'
	import BaseButton from '../common/BaseButton'

	export default {
		data(){
			return{
				titleObj:{
					title:"CONTACT US",
					subTitle:"Get in Touch",
					titleColor:"#fff",
					subTitleColor:"#fff"
				},
			}
		},
		components:{
			BaseTitle,
			BaseInput,
			BaseArea,
			BaseButton
		}
	}
</script>

<style module lang="scss" >
	.contact-container{
		background:url("../../assets/images/contact-bg.jpg") no-repeat;
	}
	.cantact-left{
		float:left;
		padding:0 15px;
		width:66.666%;
	}
	.cantact-right{
		float:left;
		width:33.333%;
		padding:0 15px;
	}
	.input-box{
		float:left;
		width:50%;
		padding:0px 15px;
		
		.input{
			width:100%;
		}
	}
	.span{
		display:block;
		font-size:12px;
		text-transform:uppercase;
		color:#fff;
	}	
	.area-box{
		width:100%;
		margin-top:25px;
		padding:0px 15px;
	}
	.area{
		width:100%;
	}
	.submit-btn{
		margin-top:25px;
		margin-left:15px;
		i{
			margin-left:10px;
		}
	}
	.cantact-item{
		margin-bottom:20px;
	}
	.media-left{
		display:table-cell;
		i{
			display:inline-block;
			width:80px;
			height:80px;
			margin-right:20px;
			font-size:30px;
			color:#fff;
			text-align:center;
			line-height:80px;
			border:2px solid #1cd1aa;
			border-radius:50%;

		}
	}
	.media-right{
		display:table-cell;
		vertical-align:top;
		h5{
			font-size:16px;
			color:#1cd1aa;
			font-weight:bold;
		}
		p{
			color:#fff;
			line-height:1.8;
		}
	}
</style>