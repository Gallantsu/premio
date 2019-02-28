<template>
	<div class="padding-top-150">
		<BaseTitle 
		:title="title" 
		:subTitle="subTitle">
		</BaseTitle>
		<ul :class="$style['work-tab']">
			<li 
			v-for="(list,index) in tabLists"
			:class="{'font-active':index==activeIndex}"
			@click="changeTab(index,list.filterKey)"
			>{{list.text}}</li>
		</ul>
		<div 
		:style="{height:divHeight}"
		:class="$style['porfolio-container']">
			<ImgContainer v-for="item in initImgPosition" :ref="item.name" v-bind="item"></ImgContainer>
		</div>
		<div :class="$style['skill-container']">
			<div class="container padding-top-150 padding-bottom-150">
				<div :class="$style['skill-left']">
					<div :class="$style.title">
						<h4>THE BEST INNOVATION DESIGN</h4>
						<span>Our Skills</span>
						<hr>
					</div>
					<div :class="$style.list">
						<ProcessBar v-for="list in processLists" v-bind="list"></ProcessBar>
					</div>
				</div>
				<div :class="$style['skill-right']">
					<img src="../../assets/images/skills-img.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import BaseTitle from '../common/BaseTitle'
	import ImgContainer from '../common/ImgContainer'
	import Velocity from 'velocity-animate'
	import ProcessBar from '../common/ProcessBar'

	const tabLists = [
		{
			text:"All",
			filterKey:"All"
		},
		{
			text:"Branding",
			filterKey:"Branding"
		},{
			text:"Media",
			filterKey:"Media"	
		},{
			text:"Illustration",
			filterKey:"Illustration"	
		},{
			text:"UI Design",
			filterKey:"Design"	
		}
	];

	const initImgPosition = [
		{
			setWidth:"25%",
			type:"Branding Illustration",
			setSrc:require("../../assets/images/img-1.jpg"),
			setTop:0,
			setLeft:0,
			heightType:2,
			name:"porfolio1"
		},
		{
			setWidth:"25%",
			type:"Media",
			setSrc:require("../../assets/images/img-2.jpg"),
			setTop:0,
			setLeft:"25%",
			heightType:1,
			name:"porfolio2"
		},
		{
			setWidth:"25%",
			type:"Branding Illustration",
			setSrc:require("../../assets/images/img-3.jpg"),
			setTop:0,
			setLeft:"50%",
			heightType:1,
			name:"porfolio3"
		},
		{
			setWidth:"25%",
			type:"Branding Illustration Design",
			setSrc:require("../../assets/images/img-4.jpg"),
			setTop:"50%",
			setLeft:"25%",
			heightType:1,
			name:"porfolio4"
		},
		{
			setWidth:"25%",
			type:"Branding Design",
			setSrc:require("../../assets/images/img-5.jpg"),
			setTop:"50%",
			setLeft:"50%",
			heightType:1,
			name:"porfolio5"
		},
		{
			setWidth:"25%",
			type:"Branding Design",
			setSrc:require("../../assets/images/img-6.jpg"),
			setTop:"0",
			setLeft:"75%",
			heightType:2,
			name:"porfolio6"
		},
	]

	const processLists = [
		{
			title:"BRANDING",
			percent:95
		},
		{
			title:"HTML5 CSS3",
			percent:75
		},
		{
			title:"WEB DESIGN",
			percent:80
		},
		{
			title:"WEB DEVELOPMENT",
			percent:60
		},
	]

	export default {
		data(){
			return {
				title:"OUR WORK",
				subTitle:"Bring Out the Porfolio",
				tabLists:tabLists,
				activeIndex:0,
				initImgPosition:initImgPosition,
				divHeight:"505px",
				processLists:processLists
			}
		},
		methods:{
			changeTab(index,filterKey){
				this.activeIndex = index;
				if(filterKey == "All"){
					for(let i = 0; i < this.initImgPosition.length; i++){
						let obj = this.initImgPosition[i];
						Velocity(this.$refs[obj.name][0].$refs.rootEl, {
						    left:obj.setLeft,
						    top:obj.setTop,
					     	padding:"0px",
						   	width:"25%"
						}, {
						    duration: 500,
					       	display:"block"
						});
					}
				}else{

					//非all的情况，按照一定的规律排序
					let highAry = [];
					let shortAry = [];
					let hideAry = [];
					for(let i = 0; i < this.initImgPosition.length; i++){
						if(this.initImgPosition[i].type.indexOf(filterKey)!=-1){
							if(this.initImgPosition[i].heightType == 2){
								highAry.push(this.initImgPosition[i]);
							}else{
								shortAry.push(this.initImgPosition[i]);
							}
						}else{
							hideAry.push(this.initImgPosition[i]);
						}
					}
					let highLeft = 0;//控制高的每个元素的左边位置
					let shortLeft = 0;//控制高的每个元素的左边位置
					let shortTop = 0;//控制每个元素的顶部位置
					let imgBreak = false;

					if(highAry.length > 0){
						while(highAry.length > 0){
							imgBreak = false;
							Velocity(this.$refs[highAry[0].name][0].$refs.rootEl, {
							    left:highLeft+"%",
							    top:0,
						     	padding:"0px",
							   	width:"25%"
							}, {
							    duration: 500,
						       	display:"block"
							});
							highAry.shift();
							shortLeft+=25;
							while(shortAry.length > 0 && imgBreak == false){
								Velocity(this.$refs[shortAry[0].name][0].$refs.rootEl, {
								    left:shortLeft + "%",
								    top:shortTop + "%",
								    padding:"0px",
								    width:"25%"
								}, {
								    duration: 500,
							       	display:"block"
								});
								shortAry.shift();
								if(highAry.length > 0){
									shortTop += 50;
									if(shortTop >= 100){
										shortTop = 0;
										shortLeft += 25;
										imgBreak = true;
									}
								}else{
									shortLeft += 25;
									if(shortLeft >= 100){
										shortLeft = 0;
									}
								}
								
							}
							if(highAry.length > 0){
								highLeft +=50;
							}
						}
						
					}else{
						while(shortAry.length > 0 ){
							Velocity(this.$refs[shortAry[0].name][0].$refs.rootEl, {
							    left:shortLeft + "%",
							    top:shortTop + "%",
							    padding:"0px",
							    width:"25%"
							}, {
							    duration: 500,
							    display:"block"
							});
							shortAry.shift();
							shortLeft += 25;
							if(shortLeft >= 100){
								shortTop += 50;
								shortLeft = 0;
							}
						}
					}
					for(let j = 0;j < hideAry.length; j++){
						Velocity(this.$refs[hideAry[j].name][0].$refs.rootEl, {
						    width:0,
						    padding:"12.5%"
						}, {
						    duration: 500,
						    display:"none"
						});
					}
				}

			}

		},
		components:{
			BaseTitle,
			ImgContainer,
			ProcessBar
		},
		mounted(){
			const that = this;
			window.onresize = ()=>{
				let width = document.documentElement.clientWidth;
				if(width > 1170){
					that.divHeight = width/2.83 + "px";
				}else{
					that.divHeight = 413 + "px";
				}
			}
		}
	}
</script>

<style module lang="scss">
	.work-tab{
		margin:0px auto 80px;
		text-align:center;
		li{
			display:inline-block;
			margin-left:15px;
			margin-right:15px;
			text-transform:uppercase;
			cursor:pointer;
			transition:all 0.7s ease;
			&:hover{
				transition:all 0.7s ease;
				color:#1cd1aa;
			}
		}
		&:after{
			display:block;
			content:"";
			clear:both;
		}
	}

	.porfolio-container{
		position:relative;
		width:100%;
		height:505px;
		overflow: hidden;
	}
	.skill-container{
		background:url("../../assets/images/inov-bg.jpg") no-repeat;
	}
	.skill-left{
		float:left;
		width:50%;
		padding-left:15px;
		padding-right:15px;
		.title{
			margin-bottom:80px;
			h4{
				font-size:30px;
				font-weight:bold;
				letter-spacing:4px;
				color:#fff;
			}
			span{
				color:#1cd1aa;
				font-size:20px;
			}
			hr{
				height: 1px;
			    border: none;
			    border-top: 1px solid #1cd1aa;
			    border-bottom: 1px solid #1cd1aa;
			    margin: 15px 0px 15px 0px;
			    width: 50px;
			    box-sizing:content-box;
			}
		}
		.list{
		
		}

	}
	.skill-right{
		float:left;
		width:50%;
		text-align:right
	}
</style>

<style>
	.font-active{
		color:#1cd1aa;
	}
</style>