<template>
	<nav>
		<ul>
			<li v-for="(list,index) in navList">
				<a href="javascript:void(0);"  
				:class="{active:index == activeItem}"    
				@click="$router.push(list.router);changeActive(index)">
					{{list.text}}
				</a>
			</li>	
		</ul>
	</nav>
</template>

<script>
const navList = [
					{text:'HOME',router:'/'},
					{text:'ABOUT',router:'/about'},
					{text:'SERVERS',router:'/server'},
					{text:'PORTFOLIO',router:'/'},
					{text:'PAGES',router:'/'},
					{text:'BLOG',router:'/'},
					{text:'CONTACT',router:'/'}
				];
	export default {
		data(){
			return{
				navList:navList,
				activeItem:0
			}
		},
		methods:{
			changeActive(index){
				this.activeItem = index;
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
			&:after{
			content:"";
				position:absolute;
				bottom:-1px;
				left:0px;
				width:0px;
				height:2px;
				background-color:#fff;
			
			}
			&:hover:after{
				-webkit-transition: 0.2s ease-in-out;
				-moz-transition: 0.2s ease-in-out;
				-ms-transition: 0.2s ease-in-out;
				-o-transition: 0.2s ease-in-out;
				transition: 0.2s ease-in-out;
				width:100%;
			}
			&.active:after{
				width:100%;
			}
		}
	}
</style>