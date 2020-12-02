<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/Login">登录123</router-link>
            <router-link to="/Risgter" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/" class="logo" title="尚品汇">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm" @submit.prevent="search">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="searchText"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="submit">
            搜索
          </button>
          <!-- button按钮如果没有type，那么在表单中，默认type就是submit -->
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      /* 方案一：字符串拼接
      获取搜索的数据
      const { searchText } = this;
      判断是否要加params参数   如果搜索内容是空，把url路径后面的 / 去掉
      const params = searchText ? `/${searchText}` : "";
      // 编程式导航，将来会发送请求
      this.$router.push(`/Search${params}`); */

      //  方案二：使用命名路由
      const { searchText } = this;
      const location = {
        name: "search",
      };
      if (searchText) {
        //searchText有值就向params添加 searchText
        // 没有就进不来
        location.params = { searchText };
      }

      //添加query参数
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = this.$route.query;
      }
      this.$router.push(location);
    },
  },
  mounted() {
    // 绑定事件总线
    this.$bus.$on("clearKeyword", () => {
      // 清空searchText
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scope>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
