import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Local from '../views/Local.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyCharities from '../views/MyCharities.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/local',
    name: 'Local',
    component: Local
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
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
    path: '/mycharities', 
    name: 'MyCharities', 
    component: MyCharities
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL, 
  routes
})

export default router
