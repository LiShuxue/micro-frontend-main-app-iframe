import Vue from "vue";
import Router from "vue-router";
import manageSubApp from '@/utils/manageSubApp';

Vue.use(Router);

const router = new Router({
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

router.beforeEach((to, from, next) => {
  manageSubApp.hideAllSubApp();
  next();
})

export default router;
