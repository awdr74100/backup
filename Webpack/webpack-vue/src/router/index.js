import VueRouter from "vue-router";
import Vue from "vue";
import alert from "../component/alert.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: "home",
      path: "/index",
      component: alert
    }
  ]
});
