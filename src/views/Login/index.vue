<template>
  <div class="login">
    <div class="login-wrap">
      <div class="loginform">
        <div class="top">
          <li class="left">
            <router-link to="/Login/Camra">扫码登录</router-link>
          </li>
          <li class="right">
            <!-- <a href="###">账号登录</a> -->
            <router-link to="/Login/Content">账号登录</router-link>
          </li>
        </div>
        <!-- <Content /> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./Content/index.vue";

export default {
  name: "Login",
  components: {
    Content,
  },
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
.login {
  width: 100%;
  height: 487px;
  background-color: #e93854;
}
.login-wrap {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url("./images/loginbg.png") no-repeat;
}
.loginform {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
  float: right;
  top: 45px;
  position: relative;
}
.top {
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
}
.left,
.right {
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 50px;
  a {
    color: #333;
  }
}
</style>
