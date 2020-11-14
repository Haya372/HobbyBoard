import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HobbyDetails from '../views/HobbyDetails.vue'
import EditHobby from '../views/EditHobby.vue'
import GatherList from '../views/GatherList.vue'
import GatherDetail from '../views/GatherDetails.vue'
import LoginView from '../views/Login.vue'
import PostGatherView from "../views/PostGather.vue"
import ShowHobbyView from "../views/ShowHobby.vue"
import Search from "../views/Search"



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/edithobby',
    name: 'edithobby',
    component: EditHobby,
    props: true
  },
  {
    path: '/gather',
    name: 'gather',
    component: GatherList,
    props: true
  },
  {
    path: '/gather/:id',
    name: 'gatherdetail',
    component: GatherDetail,
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
    path: '/hobby/:id',
    name: 'hobbydetail',
    component: HobbyDetails,
    props: true
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
