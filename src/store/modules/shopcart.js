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
      console.log({ skuId, isChecked });
      //2、重新请求购物车数据
      await reqUpdateCartCheck({ skuId, isChecked });    //失败了
      commit("UPDATE_CART_CHECK", { skuId, isChecked })
    },

    // //修改所有的checked
    // async updateAllChecked({ commit }, { skuId, isChecked }) {
    //   await reqUpdateCartCheck({ skuId, isChecked });    //失败了
    //   commit("update_All_Checked", { skuId, isChecked })
    // },


    //加入购物车
    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqUpdateCartCount(skuId, skuNum);
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },
  },
  mutations: {
    REQ_GETCART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      console.log(111);
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
    //修改商品选中状态
    UPDATE_CART_CHECK(state, { skuId, isChecked }) {
      console.log({ skuId, isChecked });
      state.cartList.find((item) => {
        if (item.skuId === skuId) {
          item.isChecked = isChecked
        }
      })
    }
  },
};
