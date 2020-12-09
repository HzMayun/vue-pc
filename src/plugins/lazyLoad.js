/*
  https://github.com/hilongjw/vue-lazyload

  1. 安装
    yarn add vue-lazyload
  2. 配置
    plugins/lazyload.js
  3. main.js 引入
  4. 使用
    将图片的src属性改成v-lazy  ::  <img v-lazy="carousel.imgUrl" />

*/
import Vue from "vue"
import VueLazyLoad from "vue-lazyload"
import loading from "../assets/imags/loading.gif"

Vue.use(VueLazyLoad, {
  loading: loading
})
