export default function({ $axios, store }) {
  $axios.onRequest(config => {
    if (store.state.auth.refresh_token) {
      config.headers.common[
        'Authorization'
      ] = `${store.state.auth.token_type} ${store.state.auth.access_token}`
    }
    return config
  })

  $axios.onError(async err => {
    if (err.response && err.response.status === 401) {
      const originalRequest = err.config
      let newToken = await $axios.get(`${process.env.baseUrl}/api/refresh`, {
        params: {
          refresh_token: store.state.auth.refresh_token
        }
      })
      await store.dispatch('auth/setToken', newToken.data)
      originalRequest.headers.Authorization = `${store.state.auth.token_type} ${store.state.auth.access_token}`
      return $axios(originalRequest)
    }

    return Promise.reject(err)
  })
}
