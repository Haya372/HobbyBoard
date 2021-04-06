import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import createPersistedState from "vuex-persistedstate"
import { createStore } from 'vuex-extensions'
Vue.use(Vuex)

const store = createStore(Vuex.Store,{
    modules: {
        auth
    },
    plugins: [createPersistedState({
        key: 'HobbyBoard',
        paths: ['auth.userId'],
        storage: window.sessionStorage
    })]
})

export default store