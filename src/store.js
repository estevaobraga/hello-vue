import Vue from 'vue'
import Vuex from 'vuex'
import usuarios from './store/usuarios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    usuarios
  }
})
