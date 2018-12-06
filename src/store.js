import Vue from "vue";
import Vuex from "vuex";
import { isAndroid, isIOS } from './utils/device';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAndroid: isAndroid,
    isIOS: isIOS,
    isMobile: false,
    wrapperAssetsPath: ''
  },
  mutations: {
    setIsMobileMutation (state, isMobile) {
      state.isMobile = isMobile
    },
    setWrapperAssetsPathMutation (state, path) {
      state.wrapperAssetsPath = path
    }
  },
  actions: {}
});
