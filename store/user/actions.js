export default {
  setUserProfile(context, user) {
    context.commit('SET_USER_PROFILE', user);
  }
}