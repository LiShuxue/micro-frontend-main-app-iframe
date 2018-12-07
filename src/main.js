import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

document.addEventListener('deviceready', ()=>{
  if(window.device){
    if(device.platform === 'Android') {
      store.commit('setIsAndroidMutation', true);
    }else if(device.platform === 'iOS'){
      store.commit('setIsIOSMutation', true);
    }
    store.commit('setIsMobileMutation', (store.state.isAndroid || store.state.isIOS));
  }
  if(cordova.file){
    store.commit('setWrapperAssetsPathMutation', cordova.file.applicationDirectory);
  }
}, false);
