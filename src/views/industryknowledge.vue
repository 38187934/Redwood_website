<!--行业知识-->
<template>
  <div>
    <!--头部-->
    <div class="container">
      <div class="columns">
        <div class="column">
          <Header :n-index="4"></Header>
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
          您现在的位置： 首页 > 行业知识 > {{breadName}}
        </div>
      </div>

    </div>

    <div class="container" style="margin-bottom: 3rem;">

      <div class="columns">
        <!--左侧DIV-->
        <div class="column is-3-desktop is-full-mobile menuCol">
          <div class="aboutTab">
            <p>行业知识</p>
            <p style="font-size:0.9rem">INDUSTRY KNOWLEDGE</p>
          </div>

          <div class="columns">

            <div class="column is-12">
              <div class="menuTab" v-for="item in typeList" :class="item.id===divInd?'active':''"
                   @click="changeTab(item.id,item.name)">
                {{item.name}}
              </div>
            </div>

          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <!--行业知识列表div-->
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
                    <a class="button is-info is-rounded" @click="getKnowledgeListByKeyword()">搜索</a>
                  </div>
                </div>
              </div>
            </div>

            <hr>


            <div class="columns is-multiline is-desktop is-mobile">

              <div class="column k-list is-12" v-for="item in industryPage.records" @click="getDetail(item)">
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
                  :url-prefix="'/industryknowledge'"
                  :current-page="industryPage.current"
                  :prev="'上一页'"
                  :next="'下一页'"
                  :displayPage="9"
                  :lastPage="industryPage.pages"
                  :url-builder="urlBuilder"
                ></pagination>
              </div>
            </div>


          </div>

          <!--行业知识详情div-->
          <div class="infoPanel" v-show="rightInd===1">
            <div class="columns is-multiline">
              <div class="column is-full">
                <h2 class="title">知识详情</h2>
                <div class="knowledgeTitle">
                  <div class="columns is-multiline is-desktop is-mobile">
                    <div class="column is-half-desktop is-full-mobile has-text-left">
                      <h3 class="subtitle">{{knowledgeDetail.summary}}</h3>
                    </div>
                    <div class="column is-half-desktop is-full-mobile has-text-right">
                      <h3 class="subtitle">{{formatDate(knowledgeDetail.updateTime)}}</h3>
                    </div>
                  </div>
                </div>

                <hr>
              </div>
              <div class="column is-full">


                <div v-html="knowledgeDetail.description"></div>


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

  import CONSTANT from '../assets/constant'

  //引入vue-bulma-pagination分页
  import Pagination from 'vue-bulma-pagination/src/Pagination'

  export default {
    name: "industryknowledge",
    components: {Footer, Header, Pagination},
    mounted() {


      //页数
      let current = this.$route.query.page;

      if (current === undefined) {
        current = 1;
      }

      this.current = current;


      this.getIndustryknowledgeTypes();

      //行业知识ID
      if(this.$route.query.categoryid!==undefined)
      {
        let categoryId = parseInt(this.$route.query.categoryid);
        this.divInd = categoryId;
        this.getIndustryknowledgeList(categoryId);
      }
      else
      {
        this.divInd=this.typeList[0].id;
        this.getIndustryknowledgeList(this.divInd);
      }


      this.keyword = this.$route.query.keyword;







    },
    data() {
      return {
        //行业知识类型列表
        typeList: null,
        //面包屑名称
        breadName: null,
        //当前类型编号
        divInd: null,
        //行业知识列表
        industryPage: {
          records: []
        },
        rightInd: 0,
        //行业知识详情
        knowledgeDetail: {},
        //查询
        keyword: null,
        //当前页数
        current: null
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
        this.getIndustryknowledgeTypes();
        this.getIndustryknowledgeList(this.divInd);
      }
    },
    methods: {
      /**
       * 获取行业知识类型列表
       */
      getIndustryknowledgeTypes() {
        this.axios.get(CONSTANT.baseURL + "/pc/category?id=2")
          .then((json) => {
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              CONSTANT.failedAlert('提示', json.data.msg);
              return false;
            } else {
              this.typeList = json.data.list;
              if (this.divInd == null) {
                this.breadName = json.data.list[0].name;
                this.divInd = json.data.list[0].id;
                this.getIndustryknowledgeList(json.data.list[0].id);
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
      /**
       * 根据行业知识类型获取行业知识列表
       * @param categoryid
       */
      getIndustryknowledgeList(categoryid) {
        let basePath = "/pc/professional/knowledge?categoryId=" + categoryid + "&current=" + this.current;

        //模糊查询判断
        if (this.keyword !== null && this.keyword !== undefined && this.keyword !== "") {
          basePath += "&name=" + this.keyword
        }

        this.axios.get(CONSTANT.baseURL + basePath)
          .then((json) => {
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              CONSTANT.failedAlert('提示', json.data.msg);
              return false;
            } else {
              this.industryPage = json.data.page;
            }
          })
      },
      //时间戳转yyyy-MM-dd
      formatDate(timestamp) {
        return CONSTANT.formatDate(timestamp, 'yyyy-MM-dd')
      },
      //切换板块
      changeTab(id, name) {

        this.rightInd=0;
        this.divInd=id;

        this.$router.push({
          path:"/industryknowledge",
          query:{
            categoryid:id,
            page:1,
          }
        })

      },
      //获取行业知识详情
      getDetail(obj) {
        this.knowledgeDetail = obj;
        this.rightInd = 1;
      },
      /**
       * 模糊查询搜索
       * @param keyword
       */
      getKnowledgeListByKeyword() {
        this.$router.push({
          path: "/industryknowledge",
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
        let keyword = this.keyword;
        return {query: {...this.$route.query, page}} // Changing page in location query
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

  h3.subtitle {
    font-size: 1rem;
  }

  @media screen and (min-width: 769px) {
    .knowledgeTitle {
      margin-top: 2rem;
    }
  }


</style>
