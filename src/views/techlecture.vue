<!--技术讲座-->
<template>
  <div>
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
              <div class="menuTab" :class="divInd===item.id?'active':''" @click="changeTab(item.id,item.name)">
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
                    <input class="input is-rounded" type="text" placeholder="请输入产品名称" v-model="keyword">
                  </div>
                  <div class="column is-2-desktop is-3-mobile">
                    <a class="button is-info is-rounded" @click="getVideoListByKeyword()">搜索</a>
                  </div>
                </div>
              </div>
            </div>

            <hr>


            <div class="columns is-multiline">

              <div class="column is-12" v-for="item in videoPage.records">

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
                    <iframe :src="videoDetail.videoUrl" frameborder="0" style="width: 100%;height:30rem;"></iframe>
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


  </div>
</template>

<script>
  import Header from "../components/header";
  import Footer from "../components/footer";

  //引入常量文件
  import CONSTANT from '../assets/constant';
  import swal from "sweetalert";


  export default {
    name: "techlecture",
    components: {Footer, Header},
    data() {
      return {
        //类型列表
        typeList: null,
        //当前选中板块名称
        breadName: null,
        //当前选中板块ID
        divInd: null,
        rightInd:0,
        //视频分页
        videoPage: {
          records:[]
        },
        //视频详情
        videoDetail: {
          description:'',
          videoUrl:'',
          imageUrl:''
        },
        //模糊视频名称
        keyword:null
      }
    },
    mounted() {
      this.getTechlectureTypeList();
    },
    methods: {
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
              this.breadName = json.data.list[0].name;
              this.divInd = json.data.list[0].id;
              this.getTechlectureList(json.data.list[0].id);
            }
          })
      },
      //根据技术讲座类型获取技术讲座视频列表
      getTechlectureList(categoryid) {
        this.axios.get(CONSTANT.baseURL + "/pc/expert/video?categoryId=" + categoryid)
          .then((json) => {
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              CONSTANT.failedAlert('提示', json.data.msg);
              return false;
            } else {
              this.videoPage = json.data.page;
            }
          })
      },
      //切换板块
      changeTab(id, name) {
        this.divInd = id;
        this.breadName = name;
        this.getTechlectureList(id);
        this.rightInd=0;
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
        this.axios.get(CONSTANT.baseURL + "/pc/expert/video?categoryId=" + this.divInd +"&name="+ this.keyword)
          .then((json) => {
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              CONSTANT.failedAlert('提示', json.data.msg);
              return false;
            } else {
              this.videoPage = json.data.page;
            }
          })
      }
    }
  }
</script>

<style scoped>


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



</style>
