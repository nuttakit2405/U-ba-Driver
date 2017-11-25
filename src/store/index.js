
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import timer from './timer'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    timer
  },
  strict: debug
})
