<template>
	<div>
		<home-slider></home-slider>
		<HomeOffer></HomeOffer>
		<HomeWork></HomeWork>
		<HomeTeam></HomeTeam>
		<HomeFact></HomeFact>
		<HomeTestimonial></HomeTestimonial>
		<HomeNews></HomeNews>
		<HomeContact></HomeContact>
		<Footer></Footer>
	</div>
</template>


<script>
	import HomeSlider from './HomeSlider'
	import HomeOffer from './HomeOffer'
	import HomeWork from './HomeWork'
	import HomeTeam from './HomeTeam'
	import HomeFact from './HomeFact'
	import HomeTestimonial from './HomeTestimonial'
	import HomeNews from './HomeNews'
	import HomeContact from './HomeContact'
	import Footer from '../Footer/Footer'
	export default {
		data(){
			return{

			}
		},
		components:{
			HomeSlider,
			HomeOffer,
			HomeWork,
			HomeTeam,
			HomeFact,
			HomeTestimonial,
			HomeNews,
			HomeContact,
			Footer
		}
	}
</script>


<style>
	
</style>