import Vue from 'vue'
import Vuex from 'vuex'
import ajdr from './ajdr/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ajdr
  }
})
