import Vue from "vue";
import Router from "vue-router";
import Card from "./components/Card/Card.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "card",
      component: Card,
    },
    {
      path: "/statistic",
      name: "statistic",
      component: () => import("./components/Statistic/statistic.vue"),
    },
  ],
});
