<template>
	<footer :class="$style.footer">
		<div class="container" >
			<div :class="$style.intro">
				<div>
					<img src="../../assets/images/logo.png" alt="">
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at purus varius odio tempus cursus. Donec quis nibh luctus, posuere velit vitae, commodo dui. Nullam eu blandit orci. Pellentesque sit amet enim sapien. Fusce nec mauris pellentesque, lacinia quam eu, molestie elit.</p>
			</div>
			<div :class="$style.link">
				<h5 :class="$style.title">Links</h5>
				<ul >
					<li :class="$style['link-list']" v-for="item in linkItems" >
						<i class="fa fa-angle-right"></i>{{item}}
					</li>
				</ul>
			</div>
			<div :class="$style.instagram">
				<h5 :class="$style.title">iNSTAGRAM with us</h5>
				<ul>
					<li v-for="item in instagrams">
						<a><img :src="item" alt=""></a>
					</li>
				</ul>
			</div>
			<div :class="$style.newsletter">
				<h5 :class="$style.title">newsletter</h5>
				<p>
					Subscribe Our Newsletter get the Important News. The Amazing Offers & Inside Scoops:
				</p>
				<div :class="$style['email-box']">
					<input type="text" name="" placeholder="Email Address">
					<i class="fa fa-envelope fa-lg"></i>
				</div>
				<div :class="$style['social-icons']">
					<a><i class="fa fa-behance"></i></a>
					<a><i class="fa fa-behance"></i></a>
					<a><i class="fa fa-behance"></i></a>
					<a><i class="fa fa-behance"></i></a>
				</div>
			</div>
		</div>
		
	</footer>
</template>
<script>
	const linkAry = ["Home","My Account","Term & Condition","Privacy Policy","Help Center"]
	const instagrams = [
		require("../../assets/images/flicker-img-1.jpg"),
		require("../../assets/images/flicker-img-2.jpg"),
		require("../../assets/images/flicker-img-3.jpg"),
		require("../../assets/images/flicker-img-4.jpg"),
		require("../../assets/images/flicker-img-5.jpg"),
		require("../../assets/images/flicker-img-6.jpg")
	]

	export default{
		data(){
			return {
				linkItems:linkAry,
				instagrams:instagrams
			}
		}
	}
</script>

<style module lang="scss" > 
	@mixin fontColor{
		
		color:#949494;
	}
	.footer{
		padding-top: 80px;
		padding-bottom:80px;
		background-color:#212121;
	}
	.intro{
		float:left;
		width:33.333%;
		padding-right:50px;
		&>div{
			padding-bottom:30px;
		}
		p{
			@include fontColor;
			line-height:26px;
			letter-spacing:0.5px;
		}
	}
	.title{
		margin-bottom:25px;
		color:#fff;
		font-size:12px;
		font-weight:bold;
	    text-transform: uppercase;
	}
	.link{
		float:left;
		width:16.666%;
		padding:0px 15px;
	}
	.link-list{
		@include fontColor;
	    text-transform: uppercase;
		line-height:40px;
		font-size:12px;
		cursor:pointer;
		i{
			margin-right:10px;
		}
	}
	.instagram{
		float:left;
		width:25%;
		padding:0px 15px;
		ul{
			margin:0 -5px;
		}
		li{
			padding:5px;
			float:left;
			img{
				width:100%;
				vertical-align:middle;
			}
		}
	}
	.newsletter{
		width:25%;
		float:left;
		p{
			@include fontColor;
			line-height:26px;
			letter-spacing:0.5px;
		}
	}
	.email-box{
		position:relative;
		margin-top:20px;
		margin-bottom:30px;
		input{
			width:100%;
			height:40px;
			line-height:40px;
			padding:0px 7px;
			font-size:12px;
		}
		i{
			position:absolute;
			right:12px;
			top:14px;
			color:#1cd1aa;
		}
	}
	.social-icons{
		padding-top:20px;
		border-top:1px solid rgba(255,255,255,0.1);
		a{
			line-height:30px;
			height:30px;
		}
		i{
			@include fontColor;
			margin-right:20px;
		}
	}
</style>