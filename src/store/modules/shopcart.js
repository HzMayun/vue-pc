import {
  reqGetCartList,
  reqUpdateCartCheck,
  reqUpdateCartCount,
  // reqDelCart,
} from "@api/shopcart";

export default {
  state: {
    cartList: [] //所有购物车数据
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      commit('REQ_GETCART_LIST', cartList);
    },
    async updateCartCheck({ commit }, { skuId, isChecked }) {
      //发送请求的目的是为了更新服务器的数据
      //1、手动更新vuex的数据，更新后 页面就会重新渲染

      //2、重新请求购物车数据
      await reqUpdateCartCheck(skuId, isChecked);

    },
    //加入购物车
    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqUpdateCartCount(skuId, skuNum);

    },
  },
  mutations: {
    REQ_GETCART_LIST(state, cartList) {
      state.cartList = cartList;
    }

  },
};
