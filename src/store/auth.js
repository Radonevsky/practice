export default {
  namespaced: true,
  state () {
    return {
      user: null
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    setUser ({ commit }, payload) {
      commit('SET_USER', payload)
    }
  }
}
