export default function({ $axios, redirect, store, error }) {
  $axios.onRequest(config => {
    if (store.state.auth.refresh_token) {
    }
    config.headers.common[
      'Authorization'
    ] = `${store.state.auth.token_type} ${store.state.auth.access_token}`
  })

  $axios.onError(err => {
    if (err.response) {
      error({
        statusCode: err.response.status,
        message: err.response.data.error.message
      })
    } else if (err.request) {
      error({ message: 'Network Error' })
    } else {
      error({ message: err.message })
    }
  })
}
