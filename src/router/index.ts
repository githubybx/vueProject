import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Regist from '@/views/Regist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/regist',
    component: Regist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
