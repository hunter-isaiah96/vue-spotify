import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const defaultState = () => ({
  isPlay: false,
  playerCurrentTime: 0,
  playerDuration: 0,
  playerCurrentTrack: null,
  availableDevices: [],
  currentDevice: {}
})

export default {
  state: defaultState,
  getters,
  actions,
  mutations
};