// home组件的vuex状态
import { reqGetBaseCategoryList } from "@api/home";

export default {
  state: {
    categoryList: [], //首页三级分类 初始化数据
  },
  getters: {},
  actions: {
    async getCategoryList({ commit }) {
      //发送请求
      const categoryList = await reqGetBaseCategoryList();
      //触发mutaions函数
      commit("GET_CATEGORY_LIST", categoryList);
    },
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      //对返回的数据categoryList 进行处理。并更新state.categoryList的数据
      state.categoryList = categoryList.slice(0, 15);
    }
  }
}
