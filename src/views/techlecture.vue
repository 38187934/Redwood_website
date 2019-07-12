<!--技术讲座-->
<template>
  <div id="page">
    <!--头部-->
    <div class="container">
      <div class="columns">
        <div class="column">
          <Header :n-index="3"></Header>
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
          您现在的位置： 首页 > 技术讲座 > {{breadName}}
        </div>
      </div>

    </div>

    <div class="container" style="margin-bottom: 3rem;">

      <div class="columns">
        <!--左侧DIV-->
        <div class="column is-3-desktop is-full-mobile menuCol">
          <div class="aboutTab">
            <p>技术讲座</p>
            <p style="font-size:0.9rem">TECHNICAL LECTURE</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-12" v-for="item in typeList">
              <div class="menuTab" :class="item.id!==null?divInd===item.id?'active':'':''" @click="changeTab(item.id,item.name)">
                {{item.name}}
              </div>
            </div>
          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <!--视频列表-->
          <div class="infoPanel" v-show="rightInd===0">
            <div class="columns">
              <div class="column">
                <h2 class="title">{{breadName}}</h2>
              </div>
              <div class="column">

                <div class="columns has-text-right is-desktop is-mobile">
                  <div class="column is-6-desktop is-9-mobile is-offset-4-desktop">
                    <input class="input is-rounded" type="text" placeholder="请输入技术讲座信息" v-model="keyword">
                  </div>
                  <div class="column is-2-desktop is-3-mobile">
                    <a class="button is-info is-rounded" @click="getVideoListByKeyword()">搜索</a>
                  </div>
                </div>
              </div>
            </div>

            <hr>


            <div class="columns is-multiline">

              <div class="column is-12" v-for="item in records">

                <div class="box">

                  <div class="columns is-multiline" @click="getDetail(item.id,item)">
                    <div class="column is-4-desktop is-12-mobile">
                      <!--                      <img src="http://via.placeholder.com/300x150?text=300X150" alt="">-->
                      <img v-bind:src="item.imageUrl" style="width: 300px;height: 150px;" alt="">
                    </div>
                    <div class="column is-8-desktop is-12-mobile">
                      <div class="description">
                        <h2>{{item.expertVideoName}}</h2>
                      </div>

                      <div class="columns is-multiline is-mobile">
                        <div class="column has-text-left">
                          <p>来源:{{item.source}}</p>
                        </div>
                        <div class="column has-text-right">
                          <p>时间:{{formatDate(item.updateTime)}}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>


            </div>

            <!--分页-->
            <div class="columns ">
              <div class="column is-full">
                <pagination
                  :url-prefix="'/techlecture'"
                  :current-page="videoPage.current"
                  :prev="'上一页'"
                  :next="'下一页'"
                  :displayPage="9"
                  :lastPage="videoPage.pages"
                  :url-builder="urlBuilder"
                ></pagination>
              </div>
            </div>



          </div>

          <!--视频播放详情-->
          <div class="infoPanel" v-show="rightInd===1">
            <div class="columns is-multiline">
              <div class="column is-full">
                <h2 class="title">{{breadName}}</h2>
                <hr>
              </div>
              <div class="column">
                <h2 class="subtitle">
                  {{videoDetail.description}}
                </h2>
                <div class="columns">
                  <div class="column is-full">
<!--                    <iframe :src="videoDetail.videoUrl" frameborder="0" style="width: 100%;height:30rem;"></iframe>-->
<!--                    <video :src="videoDetail.videoUrl" style="width: 100%;height:30rem;" controls="controls">您的浏览器暂不支持VIDEO控件</video>-->
                    <!--liming edit by 2019-05-23-->
                    <!--<div style="height:500px" v-html="videoDetail.videoUrl.replace('http:','')"></div>-->
                    <div style="height:500px" v-html="getIframe(videoDetail.videoUrl)"></div>
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

  //引入常量文件
  import CONSTANT from '../assets/constant';

  //引入vue-bulma-pagination分页
  import Pagination from 'vue-bulma-pagination/src/Pagination'


  export default {
    name: "techlecture",
    components: {Footer, Header,Pagination},
    data() {
      return {
        //加载
        isLoading:true,
        //类型列表
        typeList: [],
        //当前选中板块名称
        breadName: null,
        //当前选中板块ID
        divInd: null,
        rightInd:0,
        //视频分页
        videoPage: {
          records:[]
        },
        records:[],
        //视频详情
        videoDetail: {
          description:'',
          videoUrl:'',
          imageUrl:''
        },
        //模糊视频名称
        keyword:null,
        //当前页
        current:null
      }
    },
    /**
     *  监听路由page属性变化
     */
    watch: {
      '$route'(val) {
        this.current = this.$route.query.page;
        if (this.$route.query.page === undefined) {
          this.current = 1;
        }
        this.keyword = this.$route.query.keyword;
        this.getTechlectureTypeList();
        this.getTechlectureList(this.divInd);
      }
    },
    mounted()
    {

      //页数
      let current = this.$route.query.page;

      if (current === undefined) {
        current = 1;
      }

      this.current = current;


      this.getTechlectureTypeList();


      if(this.$route.query.categoryid!==undefined)
      {
        let categoryId = parseInt(this.$route.query.categoryid);
        this.divInd = categoryId;
        this.getTechlectureList(categoryId);
      }
      else
      {
        //this.divInd=this.typeList[0].id;
        this.getTechlectureList(this.divInd);
      }


      this.keyword = this.$route.query.keyword;

    },
    methods: {
         /**
          * liming add by 2019-05-23
          * 自定义iframe
          */
        getIframe(iframHtml){
          if(iframHtml.length>0)
          {
            //替换链接中的http字符串
            iframHtml=iframHtml.replace('http:','');
            //获取height的值
            var heightRegex=/height=(\d+)/;
            var matchResult=iframHtml.match(heightRegex);
            var height=500;
            if(matchResult!=null && matchResult!="" && matchResult.length>1){
              height=matchResult[1];
            }
            //把height加入到style中
            iframHtml=iframHtml.replace(/height=\d+/,"style='height:"+height+"px;width:800px'");
          }
            return iframHtml;
        },
      /**
       * 获取技术讲座类型列表
       */
      getTechlectureTypeList() {
        this.axios.get(CONSTANT.baseURL + "/pc/category?id=1")
          .then((json) => {
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              CONSTANT.failedAlert('提示', json.data.msg);
              return false;
            } else {
              this.typeList = json.data.list;

              if (this.divInd == null) {
                this.breadName = json.data.list[0].name;
                this.divInd = json.data.list[0].id;
                this.getTechlectureList(json.data.list[0].id);
              }
              else
              {
                this.typeList.forEach((obj,i)=>{
                  if(obj.id===this.divInd)
                  {
                    this.breadName=obj.name;
                  }
                })
              }


            }
          })
      },
      //根据技术讲座类型获取技术讲座视频列表
      getTechlectureList(categoryid) {
        let basePath = "/pc/expert/video?categoryId=" + categoryid +"&current=" + this.current;

        if (this.keyword !== null && this.keyword !== undefined && this.keyword !== "") {
          basePath += "&name=" + this.keyword
        }

        this.axios.get(CONSTANT.baseURL + basePath)
          .then((json) => {
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              //CONSTANT.failedAlert('提示', json.data.msg);
              console.info(json.data.msg);
              return false;
            } else {
              this.isLoading=false;
              this.videoPage = json.data.page;
              this.records=json.data.page.records;
            }
          })
      },
      //切换板块
      changeTab(id, name) {

        this.rightInd=0;
        this.divInd=id;

        this.$router.push({
          path:"/techlecture",
          query:{
            categoryid:id,
            page:1,
          }
        })

      },
      //时间戳转yyyy-MM-dd
      formatDate(timestamp) {
        return CONSTANT.formatDate(timestamp, 'yyyy-MM-dd')
      },
      /**
       *  获取视频详情
       */
      getDetail(id, obj) {
        this.videoDetail = obj;
        this.rightInd=1;
      },
      /**
       * 模糊查询
       * @param keyword
       */
      getVideoListByKeyword()
      {
        this.$router.push({
          path: "/techlecture",
          query: {
            page: 1,
            keyword: this.keyword,
            categoryid: this.divInd
          }
        })
      },
      /**
       * 自定义分页组件route参数
       * @param pageNum
       */
      urlBuilder(page) {
        return {query: {...this.$route.query, page}} // Changing page in location query
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
    margin-top: 1rem;
  }

  .infoPanel
  .infoPanel .column {
    margin-bottom: 0;
  }

  .rightPanel {
    margin-bottom: 3rem;
  }

  .card-content .title {
    font-size: 1.2rem;
    font-weight: normal;
  }

  .rightPanel .box {
    cursor: pointer;
  }

  .rightPanel .box:hover {
    box-shadow: 5px 5px 2.5px #ddd;;
  }

  @media screen and (min-width: 769px)
  {
    .description
    {
      margin-bottom: 6rem;
    }
  }

  .input{

    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif,Tahoma,Arial,"\5b8b\4f53",sans-serif;

  }



</style>
