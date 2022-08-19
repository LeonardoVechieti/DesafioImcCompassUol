import Vue from 'vue'
import VueRouter from 'vue-router'
import Imc from '../views/Imc/Imc.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Imc
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
