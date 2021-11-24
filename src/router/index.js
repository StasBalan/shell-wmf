import Vue from "vue";
import VueRouter from "vue-router";
import ProfileRoutes from "profile/ProfileRoutes";

// const ProfileRoutes = require("profile/ProfileRoutes").default;

Vue.use(VueRouter);

console.log('ProfileRoutes', ProfileRoutes);

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
  // {
  //   path: "/profile/new",
  //   name: "Profile",
  //   component: () => import("profile/ProfileNew"),
  // },
  ...ProfileRoutes,
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
