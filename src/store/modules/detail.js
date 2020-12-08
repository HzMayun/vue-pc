import { reqGetDetail } from "@api/detail";

export default {
  state: {
    detailList: {
      categoryView: {}, // 分类数据
      skuInfo: {
        skuImageList: [],
      }, // 商品详情数据
      spuSaleAttrList: [], // 商品选择属性数据列表
    },
  },
  getters: {
    categoryView(state) {
      return state.detailList.categoryView;
    },
    skuInfo(state) {
      return state.detailList.skuInfo;
    },
    spuSaleAttrList(state) {
      return state.detailList.spuSaleAttrList;
    },
  },
  actions: {
    //发送请求
    async getDetail({ commit }, id) {
      const detailList = await reqGetDetail(id);
      //拿到数据后productList，传给mutations,
      commit('GET_DETAIL', detailList)
    },

  },
  mutations: {
    GET_DETAIL(state, detailList) {
      state.detailList = detailList
    },
  },

}
