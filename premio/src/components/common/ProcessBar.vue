<template>
	<div>
		<p :class="$style.title">{{title}}</p>
		<div :class="$style.process">
			<div 
			:class="$style['process-bar']" 
			:style="{width:percentWidth}"
			>
			</div>
			<span 
			:class="$style['process-txt']"
			:style="{left:percentWidth}"
			>
			{{percentWidth}}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		props:{
			title:{
				type:String
			},
			percent:{
				type:Number
			}
		},
		computed:{
			percentWidth(){
				return this.percent + "%";
			}
		}
	}
</script>

<style module lang='scss' >
	.title{
	    font-size: 12px;
	    color: #fff;
	    text-align: left;
	    font-weight: normal;
	    font-family: 'Montserrat', sans-serif;
	    text-transform: uppercase;
	    line-height: 24px;
	}
	.process{
		position:relative;
		width:100%;
		margin-top:10px;
		margin-bottom:15px;
		height:10px;
		border:1px solid #1cd1aa;
		;
	}
	.process-bar{
		height:100%;
		background-color:#1cd1aa;
	}
	.process-txt{
		display:inline-block;
		position:absolute;
		top:-25px;
		padding-left:5px;
		padding-right:5px;
		border-radius:4px;
		margin-left:-25px;
		font-size:12px;
		line-height:20px;
	    text-align: center;
		color:#fff;
		background-color:#1cd1aa;
		&:after{
			content:"\f0d7";
		    position: absolute;
		    font-size: 14px;
		    right: 0px;
		    left: 0px;
		    margin: 0 auto;
		    bottom: -12px;
		    color: #1cd1aa;
		    font-family: 'FontAwesome';
		}
	}
</style>