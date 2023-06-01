<!--新闻动态-->
<template>
  <div id="page">
    <!--头部-->
    <div class="container">
      <div class="columns">
        <div class="column">
          <Header :n-index="6"></Header>
        </div>
      </div>
    </div>

    <!--手机端隐藏此div-->
    <div class="is-hidden-mobile">
      <img src="@/assets/about_banner.jpg" style="width:100%;" alt="">
    </div>


    <div class="columns" style="background-color: rgba(242, 242, 242, 1);">

      <div class="column">
        <div class="container">
          您现在的位置： 首页 > 联系我们
        </div>
      </div>

    </div>

    <div class="container" style="margin-bottom: 3rem;">

      <div class="columns">
        <!--左侧DIV-->
        <div class="column is-3-desktop is-full-mobile menuCol">
          <div class="aboutTab">
            <p>联系我们</p>
            <p style="font-size:0.9rem">CONTACT</p>
          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <div class="infoPanel">
            <div class="columns">
              <div class="column">
                <h2 class="title">联系我们</h2>
              </div>
            </div>


            <div class="columns is-multiline is-desktop is-mobile">
              <!--百度地图DIV-->
              <div class="column is-full">
                <!--百度地图组件-->
<!--                <baidu-map :center="center" :zoom="zoom" class="baiduMap" @ready="baiduMapHandler"></baidu-map>-->

                <baidu-map class="baiduMap" :center="{lng: 110.243814, lat: 21.36113}" :zoom="18">
                  <bm-marker :position="{lng: 110.243814, lat: 21.36113}" >
                    <bm-label content="超顺红木家私厂" :labelStyle="{color: 'black', fontSize : '10px'}" :offset="{width: -35, height: 30}"/>
                  </bm-marker>
                </baidu-map>
              </div>

              <!--联系信息-->
              <div class="column is-full">
                <h2 class="subtitle">集团信息</h2>
                <div class="columns is-multiline">
                  <div class="column is-full">
                    公司名称：超顺红木家私厂
                  </div>
                  <div class="column is-full">
                    全国服务热线：xxxxxxxxxx
                  </div>
                  <div class="column is-full">
                    公司网址：xxxxxxxxxxxxxx
                  </div>
                  <div class="column is-full">
                    公司地址：广东省湛江市遂溪县遂城镇沙坭岭村超顺红木家私厂
                  </div>
                </div>
              </div>

            </div>


          </div>


        </div>

      </div>

    </div>


    <!--尾部-->
    <div>
      <Footer></Footer>
    </div>


    <div id="rightBox">
      <h2 class="has-text-centered" style="font-size:1.2rem;">下载专区</h2>
      <div class="columns is-multiline" style="margin-top:0.5rem;">
        <div class="column is-full has-text-centered">
          <img src="https://www.hnzhenke.com/upload/images/website/app.png" style="width:6.5rem" alt="">
          <p>APP二维码</p>
        </div>

        <div class="column is-full has-text-centered">
          <img src="https://www.hnzhenke.com/upload/images/website/xcx.jpg" style="width:6.5rem" alt="">
          <p>小程序二维码</p>
        </div>

        <div class="column is-full has-text-centered">
          <img src="https://www.hnzhenke.com/upload/images/website/gzh.jpg" style="width:6.5rem" alt="">
          <p>公众号二维码</p>
        </div>

      </div>
    </div>

  </div>


</template>

<script>
  import Header from "../components/kheader";
  import Footer from "../components/kfooter";

  export default {
    name: "contact",
    components: {Footer, Header},
    data() {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3
      }
    },
    methods: {
      /**
       * 百度地图初始化事件
       */
      baiduMapHandler({BMap, map}) {
        console.log(BMap, map);
        //经度
        this.center.lng = 110.243814;
        //纬度
        this.center.lat = 21.36113;
        //放大倍数
        this.zoom = 15;
      }
    }
  }
</script>

<style scoped>

  @media all and (min-width: 320px) and (max-width: 450px){
    #page
    {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .BMap_Marker div{
    width:40px;
    height:50px;
  }

  .aboutTab {
    background-color: rgba(0, 122, 199, 1);
    color: white;
    padding: 1.5rem 1.8rem;
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
    font-weight: 600;
    text-align: center;
  }


  .menuTab {
    background-color: rgba(234, 234, 234, 1);
    color: black;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1rem;
    text-align: center;
    margin-top: 0.3rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    cursor: pointer;
  }

  .active {
    background-color: rgba(0, 122, 199, 1);
    color: white;
    cursor: pointer;
  }


  .menuCol .column {
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .infoPanel {
    margin-top: 1rem;
  }

  .infoPanel
  .infoPanel .column {
    margin-bottom: 0;
  }

  .rightPanel {
    margin-bottom: 3rem;
  }

  /**
    百度地图样式
   */
  .baiduMap {
    height: 30rem;
  }

  .subtitle
  {
    font-size:1.8rem;
  }


</style>
