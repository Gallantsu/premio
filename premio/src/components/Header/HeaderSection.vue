<template>
  <header class="header-narmal">
  	<div id="nav_sticky_wrapper" class="sticky-wrapper">
  		<div class="container">
  			<div class="logo">
  				<img src="../../assets/images/logo.png" alt="logo">
  			</div>
  			<!-- navigation -->
			<nav-section class="right"></nav-section>
  		</div>
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
  components:{
  	NavSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	header{
	    position: absolute;
	    width:100%;
	    height:72px;
	    overflow:hidden;
	    background:none;
	    z-index: 999;
	    .container{
	    	position:relative;
	    	width: 1170px;
	    	margin: 0 auto;
	    }
	    .logo{
	    	position:absolute;
	    	left:15px;
	    	margin:25px 0;
	    }
	}


</style>
