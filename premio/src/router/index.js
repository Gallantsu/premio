import Vue from 'vue'
import Router from 'vue-router'
import 'jquery'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
    {
      	path: '/',
    	component: () => import('@/components/Home/HomePage'),
        name: 'home',
    },
    {
      	path: '/about',
    	component: () => import('@/components/Home/HomePage'),
        name: 'about',
    },
  ]
})
