<template>
  <div class="content">
    <form action="###" @submit.prevent="login">
      <div class="input-text">
        <i></i>
        <input type="text" placeholder="手机号" />
      </div>
      <div class="input-text">
        <i></i>
        <input type="text" placeholder="请输入密码" />
      </div>
      <div class="setting">
        <label for="###" class="lable">
          <input type="checkbox" />自动登录
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
// import { Message } from "element-ui";

export default {
  name: "Content",
  methods: {
    login() {
      reqLogin("13700000000", "111111").then(
        (res) => {
          console.log("res是", res);
        },
        (err) => {
          console.log("err", err);
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
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
      border-radius: 0 2px 2px 0;
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
      border-radius: 0 2px 2px 0;
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
