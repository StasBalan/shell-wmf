import Vue from "vue";
import VueRouter from "vue-router";
import { ProfileRouters } from "profile/ProfileRouters";

Vue.use(VueRouter);

console.log('ProfileRouters', ProfileRouters);

const routes = [
  {
    path: "/",
    name: "Shell",
    component: () => import("../views/Shell.vue"),
  },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: () => import("profile/Profile"),
  // },
  ...ProfileRouters,
  {
    path: "/home",
    name: "Home",
    component: () => import("home/Home"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
