import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

new Vue({
  el: "#app",
  comments: { App },
  render: h => h(App),
  router
});
