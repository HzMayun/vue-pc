<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 1. 引入swiper两个文件
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

// https://swiperjs.com/get-started/
// Swiper6默认只有核心轮播图功能，其他功能没有
// 要使用其他功能，需要先加载
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    initSwiper() {
      // 使用 this.$refs.swiper 取代 .swiper-container
      // 使用 this.$refs.swiper 才能保证轮播图组件使用的自己的swiper
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        autoplay: {
          //要手动引入
          delay: 1000, //轮播事件
          disableOnInteraction: false, //点击按钮计时器也不会清除
        },

        // 如果需要分页器,小圆点
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //是否可点击
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  watch: {
    carouselList() {
      // [] --> 最终的数据 数据发生变化才会触发
      // 轮播图DOM元素要渲染完成 --> 轮播图数据
      // watch为了确保有轮播图数据
      // this.$nextTick为了确保轮播图数据已经渲染成DOM元素

      // 确保：swiper不能new多次
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  mounted() {
    if (!this.carouselList.length) return;
    // 等当前用户界面更新完毕，在触发其中的回调函数
    this.initSwiper();
  },
};
</script>

<style>
</style>
