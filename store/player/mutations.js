export default {
  PLAY(state) {
    state.isPlay = true;
  },
  PAUSE(state) {
    state.isPlay = false;
  },
  SET_PLAYER_CURRENT_TIME(state, time) {
    state.playerCurrentTime = time;
  },
  SET_PLAYER_DURATION(state, time) {
    state.playerDuration = time;
  },
  SET_PLAYER_CURRENT_TRACK(state, track) {
    state.playerCurrentTrack = track;
  },
  SET_AVAILABLE_DEVICES(state, devices) {
    state.availableDevices = devices
    state.currentDevice = devices.find(device => device.is_active)
  },
  SET_CURRENT_DEVICE(state, device) {
    state.currentDevice = device
  }
}