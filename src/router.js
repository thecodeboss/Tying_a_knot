import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/', 
      // :name
      name: 'about',
      component: About
    }
  ]
})