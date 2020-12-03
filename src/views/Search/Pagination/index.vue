<template>
  <div class="block">
    <el-pagination
      layout="prev,pager,next,jumper,total,sizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="options.pageNo"
      :page-size="options.pageSize"
      :page-sizes="[5, 10, 15, 20]"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pagination",
  props: {
    options: Object,
    updateProductList: Function,
  },
  computed: {
    ...mapGetters(["total"]),
  },
  methods: {
    // 当每页条数发生变化触发
    handleSizeChange(pageSize) {
      // console.log(`每页 ${pageSize} 条`);
      this.options.pageSize = pageSize;
      this.updateProductList();
    },
    // 当页码发生变化触发
    handleCurrentChange(pageNo) {
      console.log(`当前页: ${pageNo}`);
      // this.options.pageNo = pageNo;
      this.updateProductList(pageNo);
    },
  },
  data() {
    return {
      currentPage1: 1,
    };
  },
};
</script>

<style>
</style>
