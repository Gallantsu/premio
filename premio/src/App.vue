<template>
  <div id="app">
    <!-- header -->
    <header-section :isFixed="isFixed" ref="header"></header-section>
    <router-view/>
  </div>
</template>

<script>
import HeaderSection from './components/Header/HeaderSection.vue'

export default {
  name: 'App',
  methods:{
    sticky(){
      let scrollTop = document.documentElement.scrollTop;
      if(scrollTop){
        this.isFixed = true;
      }else{
          this.isFixed = false;
      }
    }
  },
  data(){
    return{
      isFixed:false
    }; 
  },
  components:{
    HeaderSection
  },
  mounted(){
    window.addEventListener('scroll', this.sticky, true);
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  body{
    background-color: rgba(128,103,103,0.7);
  }
  h1,h2,h3,h4,h5{
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    color: #252525;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  h1{
    font-size: 42px;
  }
  h2{
    font-size: 36px;
  }
  h3{
    font-size: 30px;
  }
  h4{
    font-size: 24px;
  }
  h5{
    font-size: 20px;
  }
  .left{
    float:left;
  }
  .right{
    float: right;
  }
  ul{
    list-style: none;
  }
  .font-18{
    font-size: 18px;
  }
  .font-35{
    font-size: 35px;
  }
  .font-70{
    font-size: 70px;
  }
  .cyan{
    color:#1cd1aa !important;
  }
  .letter-space-4{
    letter-spacing: 4px;
  }
</style>
