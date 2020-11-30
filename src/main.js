import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import './plugins/element.js';
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  //使用路由
  router,
  store,
}).$mount('#app');
