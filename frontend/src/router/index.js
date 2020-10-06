import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HobbyDetails from '../views/HobbyDetails.vue'
import EditHobby from '../views/EditHobby.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/content',
    name: 'content',
    component: HobbyDetails
  },
  {
    path: '/edithobby',
    name: 'edithobby',
    component: EditHobby,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
