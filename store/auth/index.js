import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = () => ({
  access_token: '',
  token_type: '',
  scope: '',
  expires_in: '',
  refresh_token: ''
})

export default {
  state,
  getters,
  actions,
  mutations,
}