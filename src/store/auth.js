export default {
  namespaced: true,

  state: {
    username: '',
    password: ''
  },

  mutations: {
    setField (state, { key, value }) {
      state[key] = value
    }
  }
}
