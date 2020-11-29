<template>
  <div>
    <Header />
    <!-- 加载显示当前路由组件 -->
    <router-view> </router-view>
    <Footer v-if="isFooterShow" />
  </div>
</template>

<script>
import Header from "@comps/Header/index";
import Footer from "@comps/Footer/index";
// import Footer from "./components/Footer/index.vue";
// import Header from "./components/Header/index.vue";
import "./styles/reset.css";

export default {
  name: "App",
  data() {
    return {
      isFooterShow: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  watch:{
    $route:{
      handler(newVal){
        this.isFooterShow=!(newVal.path.includes("/Login") || newVal.path.includes("/Risgter"))
      },
      immediate:true,//一上来就触发
    }
  }
};
</script>

<style lang="less" scoped>
</style>
