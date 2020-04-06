export default {
  state: {
    name: "AA"
  },
  mutations: {
    uploadName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + "11"
    },
    fullName1(state, getters) {
      return getters.fullName + "22"
    },
    fullName2(state, getters, rootState) {
      return getters.fullName + rootState.counter
    }
  },
  actions: {
    aUploadName(context) {
      setTimeout(() => {
        context.commit('uploadName','CC')
      },1000)
    }
  }
}
