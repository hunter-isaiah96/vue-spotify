export default async function({ store, redirect }) {
  if (store.state.auth.refresh_token) {
    try {
      let { data } = await store.$axios.get(
        `${process.env.baseUrl}/api/refresh`,
        {
          params: {
            refresh_token: store.state.auth.refresh_token
          }
        }
      )
      await store.dispatch('auth/setToken', data)
    } catch (e) {
      redirect('/auth')
    }
  } else {
    redirect('/auth')
  }
}
