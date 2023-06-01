<template>
  <div id="page">
    <!--头部-->
    <div class="container">
      <div class="columns">
        <div class="column">
          <Header :n-index="1"></Header>
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
          您现在的位置： 首页>关于红木知识>{{breadName}}
        </div>
      </div>

    </div>

    <div class="container">

      <div class="columns">
        <!--左侧DIV-->
        <div class="column is-3-desktop is-full-mobile menuCol">
          <div class="aboutTab">
            <p>关于红木知识</p>
            <p style="font-size:0.9rem">ABOUT US</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-12">
              <div class="menuTab" :class="divInd===0?'active':''" @click="changeTab(0,'企业介绍')">
                企业介绍
              </div>
            </div>
            <div class="column is-12">
              <div class="menuTab" :class="divInd===1?'active':''" @click="changeTab(1,'企业文化')">
                企业文化
              </div>
            </div>
            <div class="column is-12">
              <div class="menuTab" :class="divInd===2?'active':''" @click="changeTab(2,'企业荣誉')">
                企业荣誉
              </div>
            </div>
          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <!--企业介绍-->
          <div class="infoPanel" v-show="divInd===0">
            <h2 class="title">企业介绍</h2>
            <hr>
            <div class="columns">
              <div class="column is-full">
                <div v-html="aboutData[0].content"></div>
              </div>
            </div>

          </div>

          <!--企业文化-->
          <div class="infoPanel" v-show="divInd===1">
            <h2 class="title">企业文化</h2>
            <hr>
            <div class="columns">
              <div class="column is-full">
                <div v-html="aboutData[1].content"></div>
              </div>
            </div>

          </div>

          <!--企业荣誉-->
          <div class="infoPanel" v-show="divInd===2">

            <h2 class="title">企业荣誉</h2>
            <hr>

            <div class="columns is-multiline">
              <div class="column is-half" v-for="(item,index) in aboutData" :key="index" v-if="index>2">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img :src="item.url">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="subtitle">{{!item.title?'':item.title}}</h2>
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
          <img src="src\assets\logo.png" style="width:6.5rem" alt="">
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

  import CONSTANT from "../assets/constant";

  export default {
    name: "about",
    components: {Footer, Header},
    data() {
      return {
        //当前板块
        divInd: 0,
        breadName:'企业介绍',
        aboutData:[{content:""},{content:""},{content:""}]
      }
    },
    mounted(){
      this.axios.get(CONSTANT.baseURL+"/pc/about")
        .then((json)=>{
          if(json.data.code===CONSTANT.statusCode.SUCCESS)
          {
            this.aboutData=json.data.list
          }
          else
          {
            console.info(json.data.msg);
          }
        })
    },
    methods:{
      /**
       * 切换板块
       */
      changeTab(divInd,breadName){
        this.divInd=divInd;
        this.breadName=breadName;
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

  }

  .rightPanel {
    margin-bottom: 3rem;
  }
</style>
