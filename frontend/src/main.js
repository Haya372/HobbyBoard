import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { RecycleScroller } from 'vue-virtual-scroller'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

Vue.use(VueAxios, axios);
Vue.component('RecycleScroller', RecycleScroller);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
