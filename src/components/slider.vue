<template>
  <swiper v-if="bannerList.length>1" :options="swiperOption" ref="mySwiper" class="swiper-wrap">
    <swiper-slide v-for="(item,index) in bannerList" :key="index">
      <img :src="item.imgUrl" :alt="item.advertisementName"/>
    </swiper-slide>
    <!-- 常见的小圆点 -->
    <p class="swiper-pagination" :key="index" slot="pagination" v-for="(item,index) in bannerList"></p>
  </swiper>
</template>

<script>
  import CONSTANT from '../assets/constant'

  export default {
    name: "slider",
    mounted(){
      this.getBannerList();
    },
    data() {
      return {
        //轮播组件设置
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
        },
        //轮播列表
        bannerList:[]
      }
    },
    methods:{
      /**
       * 获取轮播图列表
       */
      getBannerList()
      {
        this.axios.get(CONSTANT.baseURL+"/pc/banner")
          .then((json)=>{
            if(json.data.code!==CONSTANT.statusCode.SUCCESS)
            {
              CONSTANT.failedAlert('提示',json.data.msg);
              return false;
            }
            else
            {
              this.bannerList=json.data.banners;
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
