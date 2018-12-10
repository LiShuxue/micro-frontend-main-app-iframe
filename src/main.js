import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import cordovaInit from "./utils/cordovaInit";
import errorHandler from "./utils/errorHandler";

Vue.config.productionTip = false;
Vue.use(ElementUI);
errorHandler.install(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

cordovaInit();

