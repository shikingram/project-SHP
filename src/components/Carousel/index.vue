<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
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
import Swiper from 'swiper';
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler(newV, oldV) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            autoplay: true, //可选选项，自动滑动
            loop: true, // 循环模式选项
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>