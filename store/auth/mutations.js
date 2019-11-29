export default {
  SET_TOKEN(state, token) {
    state.access_token = token.access_token
    state.token_type = token.token_type
    state.scope = token.scope
    state.expires_in = token.expires_in
    if (token.refresh_token)
      state.refresh_token = token.refresh_token
  }
}