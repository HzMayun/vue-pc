import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Content from "../views/Login/Content";
import Camra from "../views/Login/Camra";

//安装插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Login",
      component: Login,
      children: [
        {
          path: "Content",
          component: Content,
        },
        {
          path: "/",
          component: Content,
        },
        {
          path: "Camra",
          component: Camra,
        },

      ],
    },
    {
      path: "/Risgter",
      component: Register,
    },
    {
      path: "/Search",
      component: Search,
    },
  ],
});
