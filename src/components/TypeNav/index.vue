<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div
      class="container"
      @mouseenter="isNavShow = true"
      @mouseleave="isNavShow = false"
    >
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="search">
        <div class="sort" v-show="isHomeShow || isNavShow">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item bo"
              v-for="category in categoryList"
              :key="category.categoryId"
            >
              <h3>
                <!-- 一级分类 -->
                <!-- categoryname, categoryid, categorytype -->
                <a
                  :data-categoryname="category.categoryName"
                  :data-categoryid="category.categoryId"
                  :data-categorytype="1"
                  >{{ category.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="child in category.categoryChild"
                    :key="child.categoryId"
                  >
                    <dt>
                      <!-- 二级分类 -->
                      <a
                        :data-categoryname="child.categoryName"
                        :data-categoryid="child.categoryId"
                        :data-categorytype="2"
                        >{{ child.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <!-- 三级分类 -->
                      <em
                        v-for="grandChild in child.categoryChild"
                        :key="grandChild.categoryId"
                      >
                        <a
                          :data-categoryname="grandChild.categoryName"
                          :data-categoryid="grandChild.categoryId"
                          :data-categorytype="3"
                          >{{ grandChild.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import { reqGetBaseCategoryList } from "@api/home";
import { mapState, mapActions } from "vuex"; //导入vuex中的state和actions

export default {
  name: "TypeNav",
  data() {
    return {
      isHomeShow: this.$route.path === "/",
      isNavShow: false,
    };
  },
  // async mounted() {
  //   //调用发送请求的方法
  //   const reslut = await reqGetBaseCategoryList();
  //   this.categoryList = reslut.slice(0, 15);
  // },
  computed: {
    /*
      ...mapState(['testCount',''home])  这种方式可以实现，但是在页面中渲染的时候，
      需要使用this.home.categoryList
    */
    ...mapState({
      // 对象中的数据会传递给组件

      // categoryList就是组件能刚接收到的数据，它的值是一个函数，函数内部会调用得到值
      // 调用时,会将所有的vuex数据传递进去，就是vuex中的state
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //函数直接写。注意：将来action函数函数名称和mutation函数名称不要重复
    ...mapActions(["getCategoryList"]),
    // TypeNav点击 后，会跳转到search组件   且三级标题跳转路由路径的各不相同
    goSearch(e) {
      //定义函数，接收鼠标事件，categoryname, categoryid, categorytype分别是要给三级标题定义自定义事件的名字
      const { categoryname, categoryid, categorytype } = e.target.dataset;
      if (!categoryname) return;
      this.isNavShow = false; //点击搜索后将Nav列表隐藏

      const location = {
        // 发送请求
        name: "search",
        // path: "/search",
        query: {
          categoryName: categoryname,
          [`categroy${categorytype}Id`]: categoryid,
        },
      };
      //判断当前$route 中是不是有params参数，有就添加到location中
      const { searchText } = this.$route.params;
      if (searchText) {
        location.params = {
          searchText,
        };
        console.log(location);
      }

      this.$router.push(location);
    },
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.search-enter-active {
        transition: height 0.5s ease;
        overflow: hidden;
      }
      &.search-enter {
        height: 0px;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
