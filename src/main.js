import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import './plugins/element.js';
import store from "./store";
import "./mock/mockServer"

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    // 初始化全局事件总线对象
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  //使用路由
  router,
  store,
}).$mount('#app');
