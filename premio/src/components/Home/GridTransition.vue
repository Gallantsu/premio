<template>
	<transition-group
	@before-enter="handBeforeEnter"
	@after-enter="handAfterEnter"
	@leave="handLeave"
	@after-leave="handAfterLeave"
	tag="div"
	name="grid"
	 v-show="animateShow" 
	>
		<div  v-show="thisShow" v-for="index in 12" :key="index" :data-index="index" class="grid-container">
			<img :src="nextSrc" alt="">
		</div>
	</transition-group>
</template>

<script>
	import Velocity from 'velocity-animate'
	export default {
		data(){
			return{
				controlPram:0,
				randomNum:0
			}
		},
		computed:{
			thisShow(){
				if(!this.controlPram){
					return this.animateShow;
				}else{
					return false;
				}
			}
		},
		props:['nextSrc','animateShow'],
		methods:{
			getRandomNum(){
				this.randomNum = Math.floor(Math.random()*3);
			},
			handBeforeEnter(el){
				let index = el.dataset.index;
				let width = document.body.offsetWidth;
				el.style.top = 0;
				el.style.width = Number.parseInt(width/12)+"px";
				el.style.left = Number.parseInt(width/12)*(index-1)+"px";
				let img = el.querySelector("img");
				img.style.marginLeft = Number.parseInt(width/-12)*(index-1)+"px";
				img.style.width=width+"px";
			},
			handAfterEnter(el){
				let index = el.dataset.index;
				if(index == 12){
					this.controlPram = 1;
				}
			},
			handLeave(el,done){
				let index = el.dataset.index;
				if(index == 1){
					this.getRandomNum();
				}
		    	Velocity(el, 'stop');
	    	  	switch(this.randomNum){
	        		case 0:
	        			let movingVal = 800;
	        			if(!(index%2)){
	        				movingVal = -800;
	        			}
	        			Velocity(el, 
				        {
				        	top:movingVal
				        }, 
				        {
			                duration: 1000,
			                complete: done
		            	});
	        			break;
					case 1:
						Velocity(el, 
				        {
				        	top:-800
				        }, 
				        {
			                duration: 120+80*index,
			                complete: done
		            	});
	            		break;
					case 2:
						Velocity(el, 
				        {
				        	top:800
				        }, 
				        {
			                duration: 120+80*index,
			                complete: done
		            	});
						break;
            	}
			},
			handAfterLeave(el){
				let index = el.dataset.index;
        		if(index == 12){
        			this.controlPram = 0;
    				this.$emit("hide-animate");
        		}
			}
		}
	}
</script>

<style lang='scss'>
	.grid-container{
		position: absolute;
		height: 800px;
		z-index: 20;
		overflow: hidden;
		img{
			height: 800px;
		}
	}
</style>