export default {
  access_token: state => state.access_token,
  token_type: state => state.token_type,
  scope: state => state.scope,
  expires: state => state.expires,
  refresh_token: state => state.refresh_token
}
