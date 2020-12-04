import { reqGetDetail } from "@api/detail";

export default {
  state: {

  },
  getters: {

  },
  actions: {
    //发送请求
    async GetDetail({ commit }, id) {
      const detailList = await reqGetDetail(id);
      //拿到数据后productList，传给mutations,
      commit('GET_DETAIL', detailList)
    }
  },
  mutations: {
    GET_DETAIL(state, detailList) {

    }
  },

}
