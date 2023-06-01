<!--
  首页Vue
-->
<template>
  <div id="page">

    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-full">
          <!--导航栏-->
          <KHeader :n-index="0">
            
          </KHeader>
        </div>

      </div>
    </div>

    
            <!--轮播图-->
    <div class="wrapper">
        <div class="box">
            <span class="left">&lt;</span>  <!--左右箭头-->
            <span class="right">&gt;</span>
            <ul class="img-list">
                <li><img src="../assets/红木网站主界面.jpeg" alt=""></li>
                <li><img src="../assets/红木网站门面.jpeg" alt=""></li>
                                                                                           
            </ul>
            <div class="dot">
                <ul class="dot-list">
                    <li class="item active" ></li>
                    <li class="item"></li>
                    <li class="item"></li>
                  
                </ul>    
            </div>
        </div>       
    </div>




    

    


   

    <div>
      <KFooter></KFooter>
    </div>


    <div id="rightBox">
      <h2 class="has-text-centered" style="font-size:1.2rem;">下载专区</h2>
      <div class="columns is-multiline" style="margin-top:0.5rem;">

        <div class="column is-full has-text-centered">
          <img src="../assets/公众号二维码.jpg" style="width:6.5rem" alt="">
          <p>APP二维码</p>
        </div>

        <div class="column is-full has-text-centered">
          <img src="../assets/公众号二维码.jpg" style="width:6.5rem" alt="">
          <p>小程序二维码</p>
        </div>

        <div class="column is-full has-text-centered">
          <img src="../assets/公众号二维码.jpg" style="width:6.5rem" alt="">
          <p>公众号二维码</p>
        </div>

      </div>
    </div>


  </div>

</template>

<script>


  import KHeader from "@/components/kheader";
  import Slider from "@/components/slider";
  import KFooter from "@/components/kfooter";

  /**
   * 引入常量文件
   */
  import CONSTANT from '../assets/constant';

  export default {
    name: "index",
    components: {KFooter, Slider, KHeader},
    data(){
      return {
        indexData:[
          {
            title:"",
            content:""
          },
          {
            title:"",
            content:""
          }
          ,{
            title:"",
            content:""
          }
        ],
        img1:[],
        //第二栏图片
        img2:[],
        //第三栏图片
        img3:[]
      }
    },
    mounted() {
      this.getHomeInfo();
    },
    methods:{
      getHomeInfo(){
        this.axios.get(CONSTANT.baseURL+"/pc/home")
          .then((json)=>{
            if(json.data.code!==CONSTANT.statusCode.SUCCESS)
            {
              CONSTANT.failedAlert('提示',json.data.msg);
              return false;
            }
            else
            {
              this.indexData=json.data.list;
              this.img1=JSON.parse(this.indexData[0].json);
              this.img2=JSON.parse(this.indexData[1].json);
              this.img3=JSON.parse(this.indexData[2].json);
            }
          })
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
  .title {
    font-size: 2rem;
    font-weight: 600;
    display: block;
    margin-bottom: 0;
  }

  .science_research {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  html {
    overflow-x: hidden;
  }

  .laboratory {
    text-align: center;
    background-color: rgba(242, 242, 242, 1);
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .content {
    margin-top: 0.5rem;
  }

  .information
  {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }


</style>
