<!--
  首页Vue
-->
<template>
  <div>

    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-full">
          <!--导航栏-->
          <KHeader :n-index="0"></KHeader>
        </div>

      </div>
    </div>

    <!--轮播-->
    <div>
      <Slider></Slider>
    </div>

    <!--科学研究-->
    <div class="container science_research">
      <div class="columns">
        <div class="column is-7 is-12-mobile">
          <h1 class="title">{{indexData[0].title!==null?indexData[0].title:''}}</h1>
          <div>
            <p class="content">
              {{indexData[0].content!==null?indexData[0].content:''}}
            </p>
          </div>
        </div>

        <div class="column is-5 is-12-mobile">
          <img :src="img1[0]" alt="">
        </div>
      </div>
    </div>


    <!--实验室-->
    <div class="laboratory">
      <div class="container">

        <div class="columns is-desktop is-mobile has-text-centered">
          <div class="column is-full">
            <h1 class="title">{{indexData[1].title!=null?indexData[1].title:''}}</h1>
          </div>
        </div>

        <div class="columns is-multiline">

          <div class="column is-4" v-for="pic in img2">

            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="pic" alt="图片">
                </figure>
              </div>
            </div>

          </div>



        </div>


      </div>

    </div>


    <!--介绍信息-->
    <div class="information">
      <div class="container">
        <div class="columns">
          <!--左侧div-->
          <div class="column is-6 has-text-centered">
            <img style="width:80%" :src="img3[0]" alt="">
          </div>
          <!--右侧div-->
          <div class="column is-6">

            <div class="columns">
              <!--右侧上方div-->
              <div class="column is-full">
                <h1 class="title">{{indexData[2].title!=null?indexData[2].title:''}}</h1>
                <p class="content">
                  {{indexData[2].content!=null?indexData[2].content:''}}
                </p>
              </div>
            </div>
            <!--右侧下方div-->
            <div class="columns is-multiline">
              <div class="column is-6" v-show="ind!==0" v-for="(pic,ind) in img3" :key="ind">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img :src="pic" alt="图片">
                    </figure>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>


    <div>
      <KFooter></KFooter>
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
