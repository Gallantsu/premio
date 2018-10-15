<template>
	<nav>
		<ul>
			<li v-for="list in navList"><a :href="list.router">{{list.text}}</a></li>	
		</ul>
	</nav>
</template>

<script>
	export default {
		data(){
			return{
				navList:[
					{text:'HOME',router:'/'},
					{text:'ABOUT',router:'/'},
					{text:'SERVERS',router:'/'},
					{text:'PORTFOLIO',router:'/'},
					{text:'PAGES',router:'/'},
					{text:'BLOG',router:'/'},
					{text:'CONTACT',router:'/'}
				]
			}
		}
	}
</script>

<style lang="scss"> 
	nav ul li{
		position:relative;
		margin:0 20px;
		float:left;
		a{
			display:inline-block;
			padding-top:35px;
			padding-bottom:20px;
			color:#fff;
			font-size:12px;
			text-decoration:none;
		}
		a:after{
			content:"";
				position:absolute;
				bottom:-1px;
				left:0px;
				width:0px;
				height:2px;
				background-color:#fff;
				-webkit-transition: 0.2s ease-in-out;
				-moz-transition: 0.2s ease-in-out;
				-ms-transition: 0.2s ease-in-out;
				-o-transition: 0.2s ease-in-out;
				transition: 0.2s ease-in-out;
		}
		a:hover:after{
			width:100%;
		}
	}
</style>