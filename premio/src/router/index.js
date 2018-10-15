import Vue from 'vue'
import Router from 'vue-router'
import 'jquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
    	component: () => import('@/components/Home/HomePage'),
        name: 'home',
    }
  ]
})
