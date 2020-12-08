import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Content from "../views/Login/Content";
import Camra from "../views/Login/Camra";
import Detail from "@views/Detail";
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart";
import store from "../store";
import Pay from "@views/Pay";
import PaySuccess from "@views/PaySuccess";
import Trade from "@views/Trade";
import Center from "@views/Center";

//  重写VueRouter上的push和replace方法
const push = VueRouter.prototype.push;
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
//安装插件
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Login",
      component: Login,
      meta: {
        //当组件加载显示时，meta参数 会传递到$route中
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
    {
      name: "detail",
      path: "/detail/:id",
      component: Detail,
    },
    {
      // 命名路由
      name: "addcartsuccess",
      path: "/addcartsuccess",
      component: AddCartSuccess,
    },
    {
      // 命名路由
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
    },
    {
      // 命名路由
      name: "pay",
      path: "/pay",
      component: Pay,
    },
    {
      // 命名路由
      name: "paysuccess",
      path: "/paysuccess",
      component: PaySuccess,
    },
    {
      // 命名路由
      name: "center",
      path: "/center/myorder",
      component: Center,
    },
    {
      // 命名路由
      name: "trade",
      path: "/trade",
      component: Trade,
    },
  ],
  // 每次切换路由页面滚动条位置
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
//需要进行登录验证的地址
const permissPath = ['/trade', '/pay', "/center"]
/*
  路由导航守卫
    to :要去的路由对象
    from : 但其那款路由对象（$route）
    next : 回调函数，跳转到那个路由的方法
      要去登录路由 next('/login')  next({path: '/login'})  next({name: 'login'})

    1、全局前置守卫

*/
//全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(from);
  if (permissPath.indexOf(to.path) > -1 && store.state.token) {
    return next("/Login")
  }
  else next()
})
export default router
