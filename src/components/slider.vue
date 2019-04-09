<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
    <swiper-slide :key="0">
      <img src="@/assets/banner/banner_u36.jpg" alt=""/>
    </swiper-slide>
    <swiper-slide :key="1">
      <img src="@/assets/banner/banner_u36.jpg" alt="">
    </swiper-slide>
    <!-- 常见的小圆点 -->
    <p class="swiper-pagination" :key="0" slot="pagination"></p>
    <p class="swiper-pagination" :key="1" slot="pagination"></p>
  </swiper>
</template>

<script>
  export default {
    name: "slider",
    data() {
      return {
        swiperOption: {

          pagination: {
            el: ".swiper-pagination"
          },
          //设置显示容器同时显示的数量
          slidesPerView: 1,
          //初始化首页索引
          initialSlide: 1,
          //自动切换时间
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          spaceBetween: 30,
          loop: true
        }
      }
    }
  }
</script>

<style scoped>

</style>
