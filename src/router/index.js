import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

//安装插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Login",
      component: Login,
    },
    {
      path: "/Risgter",
      component: Register,
    },
    {
      path: "/Search",
      component: Search,
    },
  ]
})
