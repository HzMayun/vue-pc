<template>
  <div class="content">
    <form action="###" @submit.prevent="login">
      <div class="input-text">
        <i class="iconfont icon-user"></i>
        <input
          :class="{ active: isTrue }"
          type="text"
          placeholder="请输入手机号"
          v-model="phone"
        />
      </div>
      <div class="input-text">
        <i class="iconfont icon-mima1"></i>
        <input
          type="password"
          :class="{ active: isTrue }"
          placeholder="请输入密码"
          v-model="password"
        />
        <!-- autocomplete="password" -->
      </div>
      <div class="setting">
        <label for="###" class="lable">
          <input type="checkbox" v-model="autoLogin" />自动登录
        </label>
        <label for="###" class="lable">
          <input type="checkbox" v-model="RmberPassword" />记住密码
        </label>
        <a class="forget">忘记密码？</a>
      </div>
      <button class="btn">登录</button>
    </form>
    <a href="##3" class="register">没有账号？立即注册</a>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";
import "@font/iconfont.css";
import { Message } from "element-ui"; //引入警告弹窗
// import { delete } from "vue/types/umd";

export default {
  data() {
    const RmberPassword = JSON.parse(
      window.localStorage.getItem("RmberPassword")
    );
    return {
      phone: "",
      password: "",
      autoLogin: false,
      RmberPassword,
      isTrue: false,
    };
  },
  watch: {
    RmberPassword: {
      handler(newVal) {
        window.localStorage.setItem("RmberPassword", JSON.stringify(newVal));
      },
      deep: true,
    },
    phone: {
      handler(newVal) {
        window.localStorage.setItem("phone", JSON.stringify(newVal));
      },
      deep: true,
    },
    password: {
      handler(newVal) {
        window.localStorage.setItem("password", JSON.stringify(newVal));
      },
      deep: true,
    },
  },
  mounted() {
    console.log(this.RmberPassword);
    if (this.RmberPassword) {
      this.phone = JSON.parse(window.localStorage.getItem("phone"));
      this.password = JSON.parse(window.localStorage.getItem("password"));
      this.isTrue = true;
    } else {
      this.isTrue = false;
    }
  },
  name: "Content",
  methods: {
    login() {
      // 正则判断手机号时候符合规则
      if (!/^[1][2,3,4,6,5,7,8,9][0-9]{9}$/.test(this.phone)) {
        // console.log("手机号码有误，请重填");
        Message.error("手机号码有误，请重填");
        return;
      }
      //判断密码是不是为空
      if (this.password == "") {
        // console.log("密码为空，请输入密码");
        Message.error("密码不能为空，请输入密码！");
        return;
      }
      //发送请求
      reqLogin(this.phone, this.password).then(
        (res) => {
          Message({
            message: "登录成功，正在跳转...",
            type: "success",
          });
        },
        (err) => {
          Message.error(err.message);
        }
      );
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
