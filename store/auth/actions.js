import axios from 'axios'
export default {
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  async refreshToken({ commit, state }) {
    try {
      const instance = axios.create({
        baseURL: `${process.env.baseUrl}`
      })
      let token = await instance.get('/api/refresh', {
        params: { refresh_token: state.refresh_token }
      })
      commit('SET_TOKEN', token.data)
    } catch (e) {
      // if (e.response) {
      //   error({})
      // }
    }
  }
}
