export default {
  play(context) {
    context.commit('PLAY');
  },
  pause(context) {
    context.commit('PAUSE');
  },
  setPlayerCurrentTime(context, time) {
    context.commit('SET_PLAYER_CURRENT_TIME', time);
  },
  setPlayerDuration(context, time) {
    context.commit('SET_PLAYER_DURATION', time);
  },
  setPlayerCurrentTrack(context, track) {
    context.commit('SET_PLAYER_CURRENT_TRACK', track);
  },
  setAvailableDevices(context, devices) {
    context.commit('SET_AVAILABLE_DEVICES', devices)
  },
  setCurrentDevice(context, device) {
    context.commit('SET_CURRENT_DEVICE', device)
  }
}