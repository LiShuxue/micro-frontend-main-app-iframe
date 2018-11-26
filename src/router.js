import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "A",
      component: () => import("./views/A.vue")
    },
    {
      path: "/b",
      name: "B",
      component: () => import("./views/B.vue")
    },
    {
      path: "/c",
      name: "C",
      component: () => import("./views/C.vue")
    }
  ]
});
