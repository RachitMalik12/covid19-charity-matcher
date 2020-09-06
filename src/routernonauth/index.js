import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LandingPage from '../views/LandingPage.vue'


Vue.use(VueRouter)

const routes = [
 {
    path: '/login', 
    name: 'login', 
    component: Login
  },
  {
    path: '/register', 
    name: 'register', 
    component: Register
  },
  {
      path:'/', 
      name: 'landing', 
      component: LandingPage
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL, 
  routes
})

export default router
