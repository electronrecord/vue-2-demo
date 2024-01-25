import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requestState: 'idle'
  },
  getters: {
  },
  mutations: { // commit
    SET_REQUEST_STATE (state, newValue) {
      state.requestState = newValue
    }
  },
  actions: { // dispatch
    async login (context, data) {
      try {
        context.commit('SET_REQUEST_STATE', 'sending')
        setTimeout(() => {
          // route to new page after login success
          router.push('/about')
          context.commit('SET_REQUEST_STATE', 'idle')
        }, 1000)
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
