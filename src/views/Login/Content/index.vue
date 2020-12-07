<template>
  <div class="content">
    <form action="###" @submit.prevent="login">
      <div class="input-text">
        <i class="iconfont icon-user"></i>
        <input type="text" placeholder="请输入手机号" v-model="user.phone" />
      </div>
      <div class="input-text">
        <i class="iconfont icon-mima1"></i>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="user.password"
        />
        <!-- autocomplete="password" -->
      </div>
      <div class="setting">
        <label for="###" class="lable">
          <input type="checkbox" v-model="autoLogin" />自动登录
        </label>
        <a class="forget">忘记密码？</a>
      </div>
      <button class="btn">登录</button>
    </form>
    <a href="##3" class="register">没有账号？立即注册</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "@font/iconfont.css";
import { Message } from "element-ui"; //引入警告弹窗
// import { delete } from "vue/types/umd";

export default {
  name: "Content",
  data() {
    return {
      user: { phone: "", password: "" },
      autoLogin: false, //自动登录
      isLogining: false, // 正在登录
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  created() {
    if (this.token) {
      //如果有token，这届跳转到主页
      this.$router.replace("/");
    }
  },
  methods: {
    async login() {
      try {
        if (this.isLogining) return;
        this.isLogining = true;
        const { phone, password } = this.user;
        // 正则判断手机号时候符合规则
        if (!/^[1][2,3,4,6,5,7,8,9][0-9]{9}$/.test(phone)) {
          Message.error("手机号码有误，请重填");
          return;
        }
        //判断密码是不是为空
        if (this.password == "") {
          // console.log("密码为空，请输入密码");
          Message.error("密码不能为空，请输入密码！");
          return;
        }
        //发送请求  登录
        await this.$store.dispatch("reqLogin", { phone, password });

        //登录成功
        if (this.autoLogin) {
          //如果有自动登录，把token和name存入localStorage
          localStorage.setItem("token", this.token);
          localStorage.setItem("name", this.name);
        }
        this.$router.replace("/"); //存入后跳转到主页
      } catch (error) {
        this.isLogining = false; //登陆失败，就将isLogining重置为false
      }
    },
  },
};
</script>

<style lang="less" scoped>
.active {
  background-color: #f3f0e0;
}
.icon-user,
.icon-mima1 {
  font-size: 27px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  background-color: #e1251b;
}
.content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
  form {
    margin: 15px 0 18px 0;
    font-size: 12px;
    line-height: 18px;
  }
  .input-text {
    margin-bottom: 22px;
    i {
      width: 37px;
      height: 32px;
      float: left;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 4px 0 0 4px;
    }
    input {
      width: 302px;
      height: 32px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-left: none;
      padding: 6px;
      outline: none;
      font-size: 14px;
      border-radius: 0 4px 4px 0;
    }
  }
}
.setting {
  display: flex;
  justify-content: space-between;
}
.btn {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 4px 4px 4px 4px;
  font-size: 16px;
  font-family: 微软雅黑;
  word-spacing: 4px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
}
.register {
  margin-top: 20px;
  float: right;
}
</style>
