import Vue from "vue";
import App from "./App";
import router from "./router";

new Vue({
  router, // ES6 縮寫，等同於 router: router
  render: (h) => h(App),
}).$mount("#app");
