import axios from 'axios'
export default {
  setToken(context, token) {
    context.commit('SET_TOKEN', token)
  },
  async refreshToken(context, refresh_token) {
    try {
      const instance = axios.create({
        baseURL: `${process.env.baseUrl}`
      })
      let token = await instance.get('/api/refresh', {
        params: { refresh_token }
      })
      context.commit('SET_TOKEN', token.data)
    } catch (e) {
      // if (e.response) {
      //   error({})
      // }
    }
  }
}
