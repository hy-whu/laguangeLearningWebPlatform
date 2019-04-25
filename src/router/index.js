import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import Login from '@/pages/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
