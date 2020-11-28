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
// 重写VueRouter上的push和replace方法
const push = VueRouter.prototype.puah;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    // 如果用户想处理失败，就处理
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => { });
};
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    // 如果用户想处理失败，就处理
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => { });
};

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Login",
      component: Login,
      meta: {
        isFooterShow: true,
      },
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
      meta: {
        isFooterShow: true,
      },
    },
    {
      name: "search",
      path: "/Search/:searchText?",
      component: Search,
    },
  ],
});
