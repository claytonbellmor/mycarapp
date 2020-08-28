import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Garage from "@/views/Garage.vue";
import MyCar from "@/views/MyCar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/mycar",
    name: "MyCar",
    component: MyCar,
  },
  {
    path: "/garage",
    name: "Garage",
    component: Garage,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
