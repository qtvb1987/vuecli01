import Vue from 'vue'
import Vuex from 'vuex'
import testcount from './testcount';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: testcount
  }
})