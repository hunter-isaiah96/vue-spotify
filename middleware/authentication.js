export default async function({ store, redirect }) {
  if (!store.state.auth.refresh_token) {
    redirect('/auth')
  } else {
    if (new Date().getTime() > store.state.auth.expires)
      store.dispatch('auth/refreshToken')
  }
}
