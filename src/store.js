import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAndroid: false,
    isIOS: false,
    isMobile: false,
    wrapperAssetsPath: ''
  },
  mutations: {
    setIsAndroidMutation (state, isAndroid) {
      state.isAndroid = isAndroid
    },
    setIsIOSMutation (state, isIOS) {
      state.isIOS = isIOS
    },
    setIsMobileMutation (state, isMobile) {
      state.isMobile = isMobile
    },
    setWrapperAssetsPathMutation (state, path) {
      state.wrapperAssetsPath = path
    }
  },
  actions: {}
});
