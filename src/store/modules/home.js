// home组件的vuex状态
import { reqGetBaseCategoryList, reqGetBanners, reqGetFloors } from "@api/home";

export default {
  state: {
    categoryList: [], //首页三级分类 初始化数据
    banners: [], //首页轮播图数据
    floors: [],//首页顶层数据
  },
  getters: {},
  actions: {
    async getCategoryList({ commit }) {
      //发送请求
      const categoryList = await reqGetBaseCategoryList();
      //触发mutaions函数
      commit("GET_CATEGORY_LIST", categoryList);
    },
    async getBanners({ commit }) {
      //发送请求
      const banners = await reqGetBanners();
      //触发mutaions函数
      commit("REQGET_BANNERS", banners);
    },
    async getFloors({ commit }) {
      //发送请求
      const floors = await reqGetFloors();
      //触发mutaions函数
      commit("REQGET_FLOORS", floors);
    },
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      //对返回的数据categoryList 进行处理。并更新state.categoryList的数据
      state.categoryList = categoryList.slice(0, 15);
    },
    REQGET_BANNERS(state, banners) {
      //banners 进行处理。并更新state.banners的数据
      state.banners = banners;
    },
    REQGET_FLOORS(state, floors) {
      //对返回的数据floors进行处理。并更新state.floors的数据
      state.floors = floors;
    },
  }
}
