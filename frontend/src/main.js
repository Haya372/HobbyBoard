import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add
import store from './store'
import initialState from './store/initialState';

Vue.use(VueAxios, axios);
Vue.use(VueVirtualScroller);
Vue.component('RecycleScroller', VueVirtualScroller.RecycleScroller);
Vue.component('recyclescroller', VueVirtualScroller.RecycleScroller);
Vue.component('recyclescrolleritem', VueVirtualScroller.RecycleScrollerItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
  created(){
    localStorage.setItem('initialState', JSON.stringify(initialState));
  }
}).$mount('#app')
