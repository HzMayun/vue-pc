<template>
  <div>
    <TypeNav />
  </div>
</template>

<script>
import TypeNav from "@comps/TypeNav";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Search",
  components: {
    TypeNav,
  },
  computed: {
    //这么写以后访问很麻烦 ，可以写在getters里面，方便访问
    /*  ...mapState({
      productList: (state) => state.search.productList,
      trademarkList: (state) => state.search.productList.trademarkList,
      attrsList: (state) => state.search.productList.attrsList,
      goodsList: (state) => state.search.productList.goodsList,
    }), */
    //search 组件只用了gooList里面的数据，所以只写这么一个就行
    ...mapGetters(["goodsList"]),
  },
  methods: {
    ...mapActions(["getProduct"]),
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="less" scoped>
</style>
