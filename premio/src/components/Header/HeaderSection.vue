<template>
  <header :class="{'fix-menu':isFixed}">
  	<div class="container">
  			<div class="logo">
  				<img src="../../assets/images/logo.png" alt="logo">
  			</div>
  			<!-- navigation -->
			<nav-section class="right"></nav-section>
  		</div>
  </header>
</template>

<script>
import NavSection from './NavSection.vue'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:["isFixed"],
  components:{
  	NavSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	header{
	    position: fixed;
	    top:0px;
	    width:100%;
	    height:72px;
	    background:none;
	   	transition:all ease 0.8s;
	    z-index: 999;
	    .logo{
	    	position:absolute;
	    	left:15px;
	    	margin:25px 0;
	    }
	}

	.fix-menu{
		transition:all ease 0.8s;
		background-color:rgba(0,0,0,0.8);
	}

</style>
