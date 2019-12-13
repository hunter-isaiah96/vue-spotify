export default async function({ store, redirect }) {
  if (!store.state.auth.refresh_token) {
    redirect('/auth')
  }
}
