<template>
	<div class="padding-top-150 padding-bottom-150">
		<div class="container">
			<BaseTitle v-bind="titleObj"></BaseTitle>
			<swiper class="swiper-box" :options="swiperOption">
		        <swiper-slide 
				v-for="item in testimonialAry"
		        >
		        	<div :class="$style.portrait">
		        		<img :src="item.src" alt="">
		        	</div>
		        	<div :class="$style.brief">
		        		<h5>{{item.name}}</h5>
		        		<span :class="$style['brief-post']">{{item.post}}</span>
		        		<span :class="$style['brief-star']">
		        			<i  
		        			v-for="num in 5"
		        			:class="['fa',num <= item.star?'fa-star':'fa-star-o']"
		        			>
		        			</i>
		        		</span>
		        	</div>
		        	<p :class="$style['brief-description']" >{{item.description}}</p>
		        </swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
      		</swiper>
      		<ul class="clear-float" :class="$style['clients-box']">
      			<li v-for="list in imgAry">
      				<a>
      					<img :src="list" alt="">
      				</a>
  				</li>
  				
      		</ul>
		</div>
	</div>
</template>

<script>

	import BaseTitle from '../common/BaseTitle'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  

	const testimonialAry = [
		{
			name:"Steven Smith",
			post:"CEO Of Premio",
			star:3,
			src:require("../../assets/images/avatar-1.jpg"),
			description:"They're creepy and they're kooky mysterious and spooky. They're all together ooky the Addams What might be right for you may not be to right for some Now the world. "
		},
		{
			name:"Steven Smith",
			post:"Design",
			star:3,
			src:require("../../assets/images/avatar-2.jpg"),
			description:"They're creepy and they're kooky mysterious and spooky. They're all together ooky the Addams What might be right for you may not be to right for some Now the world. "
		}
	]

	const imgAry = [
		require("../../assets/images/c-img-1.png"),
		require("../../assets/images/c-img-2.png"),
		require("../../assets/images/c-img-3.png"),
		require("../../assets/images/c-img-4.png"),
	]

	export default {
		data(){
			return {
				titleObj:{
					title:"OUR TESTIMONIALS",
					subTitle:"Solutions For a Small Testimonial"
				},
				swiperOption: {
					slidesPerView: 2,
					spaceBetween: 50,
					slidesPerGroup: 1,
					loop: true,
					loopFillGroupWithBlank: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					
        },
		        testimonialAry:testimonialAry,
		        imgAry:imgAry
			}
		},
		components:{
			BaseTitle,
			swiper,
			swiperSlide
		}
	}
</script>

<style module lang="scss" >
	.portrait{
		float:left;
	}
	.brief{
		padding-left: 120px;
		margin-bottom: 20px; 
		h5{
			margin-bottom:5px;
			font-size: 18px;
			font-weight: 600;
			line-height:2;
		}
		i{
			color:#1cd1aa;
			margin:0px 2px;
		}
	}
	.brief-post{
		display:block;
		font-size:14px;
		color:#1cd1aa;
		margin-bottom:10px;
	}
	.brief-description{
		font-size:14px;
		line-height:2;
	}
	.clients-box{
		margin-top:100px;
		li{
			float:left;
			width:25%;
			text-align:center;
		}
	}
</style>
<style lang="scss">
	.swiper-slide{
		padding: 30px;
	  	border: 1px solid #1cd1aa;
	}
	.swiper-box .swiper-pagination{
		position: inherit;
		margin-top: 15px;
		.swiper-pagination-bullet{
			height:4px;
			width:10px;
			border-radius:2px;
			background:#60dfc3;
		    opacity: 1;
		    transition:width 0.3s linear;
		}
		.swiper-pagination-bullet-active{
			width:25px;
			background:#1cd1aa;
			transition:width 0.3s linear;
		}
	}
</style>