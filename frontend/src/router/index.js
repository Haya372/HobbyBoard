import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HobbyDetails from '../views/HobbyDetails.vue'
import EditHobby from '../views/EditHobby.vue'
import LoginView from '../views/Login.vue'
import PostGatherView from "../views/PostGather.vue"
import ShowHobbyView from "../views/ShowHobby.vue"
import ShowGather from "../views/ShowGather.vue"
import GatherDetails from '../views/GatherDetails.vue'
import Search from "../views/Search"


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
    path: '/hobbydetail/:id',
    name: 'hobbydetail',
    component: HobbyDetails,
    props: true
  },
  {
    path: '/edithobby/:id',
    name: 'edithobby',
    component: EditHobby,
    props: true
  },
  {
    path: '/login',
    name: 'loginView',
    component: LoginView,
    props: true
  },
  {
    path: '/postGather',
    name: 'postGatherView',
    component: PostGatherView,
    props: true
  },
  {
    path: '/showHobby',
    name: 'showHobbyView',
    component: ShowHobbyView,
    props: true
  },
  {
    path: '/showGather',
    name: 'showGatherView',
    component: ShowGather,
    props: true
  },
  {
    path: '/gatherdetail/:id',
    name: 'gatherdetail',
    component: GatherDetails,
    props: true
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
