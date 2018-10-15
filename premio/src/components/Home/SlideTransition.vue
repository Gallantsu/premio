<template>
	<transition 
	@after-enter="handleAfterEnter"
	@before-leave="handleBeforeLeave" 
	@leave="handleLeave" 
	@after-leave="handleAfterLeave"
 	name="slide" 
 	>
		<div v-show="thisShow" class="slide-container">
			<img :src="nextSrc" alt="">
		</div>
	</transition>	
</template>


<script>

export default {
	data(){
		return{
			controlPram:0
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
		handleAfterEnter:function(el){
			this.controlPram = 1;
		},
        handleBeforeLeave: function (el) {
        },
        handleLeave: function (el, done) {
            Velocity(el, 'stop');
            let bodyWidth = document.body.offsetWidth;
            let target = {left:bodyWidth};//default
            switch(Math.floor(Math.random()*4)){
        		case 0:target = {left:-bodyWidth};break;
				case 1:target = {left:bodyWidth};break;
				case 2:target = {top:800};break;
				case 3:target = {top:-800};break;
            }
            Velocity(el, target, {
                duration: 1000,
                complete: done
            });
        },
        handleAfterLeave: function (el) {
        	this.controlPram = 0;
    		el.style.left=0;
        	el.style.top = 0;
        	this.$emit("hide-animate");
        }
	}
}

</script>


<style lang='scss'>
	.slide-container{
		position:absolute;
		top:0px;
		left:0px;
		width:100%;
		height:100%;
		z-index:20;
		img{
			width:100%;
			height:100%;
		}
	}
</style>