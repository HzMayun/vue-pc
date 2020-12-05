import { reqGetProduct } from "@api/search";

export default {
  state: {
    productList: {
      trademarkList: [],
      attrsList: [],
      goodsList: [],
    },
  },
  getters: {
    //对数据进行处理，方便访问
    trademarkList(state) { return state.productList.trademarkList },
    attrsList(state) { return state.productList.attrsList },
    goodsList(state) { return state.productList.goodsList },
    total(state) { return state.productList.total },
  },
  actions: {
    //发送请求
    async getProduct({ commit }, data = {}) {
      const productList = await reqGetProduct(data);
      //拿到数据后productList，传给mutations,
      commit('GET_PRODUCT', productList)
    }
  },
  mutations: {
    GET_PRODUCT(state, productList) {
      // 对state中的数据进行修改
      state.productList = productList
      // console.log(state);
    }
  },

}

