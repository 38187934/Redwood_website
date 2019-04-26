<!--新闻动态-->
<template>
  <div>
    <!--头部-->
    <div class="container">
      <div class="columns">
        <div class="column">
          <Header :n-index="5"></Header>
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
          您现在的位置： 首页 > 新闻动态 > {{breadName}}
        </div>
      </div>

    </div>

    <div class="container" style="margin-bottom: 3rem;">

      <div class="columns">
        <!--左侧DIV-->
        <div class="column is-3-desktop is-full-mobile menuCol">
          <div class="aboutTab">
            <p>新闻动态</p>
            <p style="font-size:0.9rem">NEWS</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-12" v-for="item in typeList">
              <div class="menuTab" :class="item.id===divInd?'active':''" @click="changeTab(item.id,item.name)">
                {{item.name}}
              </div>
            </div>
          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <!--新闻列表-->
          <div class="infoPanel" v-show="rightInd===0">
            <div class="columns">
              <div class="column">
                <h2 class="title">{{breadName}}</h2>
              </div>
              <div class="column">

                <div class="columns has-text-right is-desktop is-mobile">
                  <div class="column is-6-desktop is-9-mobile is-offset-4-desktop">
                    <input class="input is-rounded" type="text" placeholder="" v-model="keyword">
                  </div>
                  <div class="column is-2-desktop is-3-mobile">
                    <a class="button is-info is-rounded" @click="search()">搜索</a>
                  </div>
                </div>
              </div>
            </div>

            <hr>


            <div class="columns is-multiline is-desktop is-mobile">

              <div class="column k-list is-12" v-for="item in newsPage.records" @click="getDetail(item)">
                <div class="columns">
                  <div class="column has-text-left">
                    <p>{{item.summary}}</p>
                  </div>
                  <div class="column has-text-right">{{formatDate(item.updateTime)}}</div>
                </div>
              </div>

            </div>

            <!--分页-->
            <div class="columns ">
              <div class="column is-full">
                <pagination
                  :url-prefix="'/news'"
                  :current-page="newsPage.current"
                  :prev="'上一页'"
                  :next="'下一页'"
                  :displayPage="9"
                  :lastPage="newsPage.pages"
                  :url-builder="urlBuilder"
                ></pagination>
              </div>
            </div>


          </div>

          <!--新闻详情-->
          <div class="infoPanel" v-show="rightInd===1">
            <div class="columns is-multiline">
              <div class="column is-full">
                <h2 class="title">新闻详情</h2>
              </div>
              <div class="column">
                <div class="columns">
                  <div class="column is-half-desktop is-half-mobile has-text-left">
                    <h2 class="subtitle">{{newsDetail.summary}}</h2>
                  </div>
                  <div class="column is-half-desktop is-half-mobile has-text-right">
                    <h2 class="subtitle">{{formatDate(newsDetail.updateTime)}}</h2>
                  </div>
                </div>
                <hr>

                <div class="columns is-multiline">
                  <!--新闻详情-->
                  <div class="column is-full" v-html="newsDetail.description">

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
  import Header from "../components/kheader";
  import Footer from "../components/kfooter";
  import CONSTANT from "../assets/constant"

  //引入vue-bulma-pagination分页
  import Pagination from 'vue-bulma-pagination/src/Pagination'

  export default {
    name: "news",
    components: {Pagination, Footer, Header},
    data() {
      return {
        //新闻类型列表
        typeList: null,
        //新闻列表分页
        newsPage: {
          records: [],
          pages: 0
        },
        //当前新闻类型名称&面包屑名称
        breadName: null,
        //当前新闻类型ID
        divInd: null,
        //新闻详情
        newsDetail: {
          summary: null,
          updateTime: null,
          description: null
        },
        //0显示列表1显示详情
        rightInd: 0,
        //模糊查询
        keyword: null,
        //当前页
        current:null
      }
    },
    mounted() {

      //页数
      let current = this.$route.query.page;

      if(current===undefined)
      {
        current=1;
      }

      this.current=current;


      this.getNewstypeList();

      //新闻类型ID
      if(this.$route.query.categoryid!==undefined)
      {
        let categoryid=parseInt(this.$route.query.categoryid);
        this.divInd=categoryid;
        this.getNewsPage(categoryid);
      }
      else
      {
        //this.divInd=this.typeList[0].id;
        this.getNewsPage(this.divInd);
      }



    },
    /**
     *  监听路由page属性变化
     */
    watch:{
      '$route'(val){
        this.current=this.$route.query.page;
        if(this.$route.query.page===undefined)
        {
          this.current=1;
        }
        this.getNewstypeList();
        this.getNewsPage(this.divInd)
      }
    },
    methods: {
      /**
       * 获取新闻类型列表
       */
      getNewstypeList() {
        this.axios.get(CONSTANT.baseURL + "/pc/category?id=3")
          .then((json) => {
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              //CONSTANT.failedAlert('提示', json.data.msg);
              console.info(json.data.msg);
              return false;
            }
            else {
              this.typeList = json.data.list;
              if (this.divInd == null)
              {
                this.breadName = json.data.list[0].name;
                this.divInd = json.data.list[0].id;
                this.getNewsPage(json.data.list[0].id);
              }
              else
              {
                this.typeList.forEach((obj,i)=>{
                  if(obj.id===this.divInd)
                  {
                    this.breadName=obj.name
                  }
                })
              }


            }
          })
      },
      /**
       * 分页获取新闻列表 (通过新闻类型ID或新闻类型ID&新闻名称查询)
       * @param categoryId
       * @param name
       */
      getNewsPage(categoryId) {
        let basePath = "/pc/news?categoryId=" + categoryId + "&current="+this.current;

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
              this.newsPage = json.data.page;
            }
          })
      },
      /**
       * 时间戳转换
       * @param time
       */
      formatDate(time) {
        return CONSTANT.formatDate(time, 'yyyy-MM-dd')
      },
      /**
       * 切换板块
       * @param categoryId
       * @param name
       */
      changeTab(categoryId, name) {

        this.rightInd = 0;
        this.divInd=categoryId;

        this.$router.push({
          path:"/news",
          query:{
            categoryid:categoryId,
            page:1,
          }
        })

      },
      /**
       * 模糊查询，按类别ID以及模糊名称
       */
      search() {

        this.$router.push({
          path: "/news",
          query: {
            page: 1,
            keyword: this.keyword,
            categoryid: this.divInd
          }
        })

      },
      /**
       * 展示新闻详情
       */
      getDetail(obj) {
        this.newsDetail = obj;
        this.rightInd = 1;
      },
      /**
       * 自定义分页组件route参数
       * @param pageNum
       */
      urlBuilder (page) {
        return { query: { ...this.$route.query, page } } // Changing page in location query
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

  .k-list {
    border-bottom: 2px solid #f5f5f5;
    cursor: pointer;
  }


</style>
