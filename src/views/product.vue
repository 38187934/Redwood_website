<template>
  <div>
    <!--头部-->
    <div class="container">
      <div class="columns">
        <div class="column">
          <Header :n-index="2"></Header>
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
          您现在的位置： 首页>产品中心>{{breadName}}
        </div>
      </div>

    </div>

    <div class="container" style="margin-bottom: 3rem;">

      <div class="columns">
        <!--左侧DIV-->
        <div class="column is-3-desktop is-full-mobile menuCol">
          <div class="aboutTab">
            <p>产品中心</p>
            <p style="font-size:0.9rem">PRODUCT CENTER</p>
          </div>

          <!--左侧类型菜单-->
          <div class="columns is-multiline">
            <div class="column is-12">
              <div class="menuTab" v-for="item in typeList" :class="item.goodsCategoryId===currentCategoryId?'active':''" @click="changeTab(item.goodsCategoryId,item.goodsCategoryName)">
                {{item.goodsCategoryName}}
              </div>
            </div>


          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <div class="infoPanel">
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
                    <a class="button is-info is-rounded" @click="search()">搜索</a>
                  </div>
                </div>
              </div>
            </div>

            <hr>


            <div class="columns is-multiline">
              <div class="column is-4" v-for="item in productPage.records" @click="getDetail(item)" style="cursor: pointer">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img :src="item.images!=null?JSON.parse(item.images)[0]:''" :alt="item.goodsName">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="title">{{item.goodsName}}</h2>
                  </div>
                </div>

              </div>

            </div>

            <!--分页-->
            <div class="columns ">
              <div class="column is-full">
                <pagination
                  :url-prefix="'/industryknowledge'"
                  :current-page="productPage.current"
                  :prev="'上一页'"
                  :next="'下一页'"
                  :displayPage="9"
                  :lastPage="productPage.pages"
                  :url-builder="urlBuilder"
                ></pagination>
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

    <!--模态框-->
    <div class="modal" v-bind:class="{ 'is-active': showModal }">
      <div class="modal-background" v-on:click="showModal = false"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <!--关闭按钮-->
          <div class="has-text-right">
            <button class="delete has-text-right" aria-label="close" v-on:click="showModal = false"></button>
          </div>

          <div class="columns is-multiline">
            <div class="column is-4 has-text-centered">
              <img style="border:2px solid #0088c7;" :src="productDetail.images!=null?JSON.parse(productDetail.images)[0]:''" alt="">
            </div>
            <div class="column is-8 modal_detail">
              <p class="descText">{{productDetail.goodsName}}</p>
            </div>
          </div>

        </section>
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
    name: "product",
    components: {Footer, Header,Pagination},
    data() {
      return {
        showModal: false,
        breadName:null,
        //产品类型列表
        typeList:[],
        //产品列表分页
        productPage:{
          records:[]
        },
        //商品编号
        goodsId:null,
        //当前选中类型ID
        currentCategoryId:null,
        //商品详情
        productDetail:{
          goodsName:null,
          images:null
        },
        //模糊查询产品名称
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
        this.getGoodsCategories();
        this.getProductPage(this.currentCategoryId);
      }
    },
    mounted() {

      this.getGoodsCategories();
      //页数
      let current = this.$route.query.page;

      if (current === undefined) {
        current = 1;
      }

      this.current = current;



      if(this.$route.query.categoryid!==undefined)
      {
        let categoryId = parseInt(this.$route.query.categoryid);
        this.currentCategoryId = categoryId;
        this.getProductPage(categoryId);
      }
      else
      {
        this.getGoodsCategories();
      }

      this.keyword = this.$route.query.keyword;
    },
    methods:{
      /**
       * 获取产品类型列表
       */
      getGoodsCategories(){
        this.axios.get(CONSTANT.baseURL+"/pc/goods/categories")
          .then((json)=>{
            if(json.data.code!==CONSTANT.statusCode.SUCCESS)
            {
              CONSTANT.failedAlert('提示',json.data.msg);
              return false;
            }
            else
            {
              this.typeList=json.data.list;

              if(this.currentCategoryId === null)
              {
                this.currentCategoryId=json.data.list[0].goodsCategoryId;
                this.breadName=json.data.list[0].goodsCategoryName;
                this.getProductPage(this.currentCategoryId);
              }
              else
              {
                this.typeList.forEach((obj,i)=>{
                  if(obj.goodsCategoryId===this.currentCategoryId)
                  {
                    this.breadName=obj.goodsCategoryName;
                  }
                })
              }
            }
          })
      },
      /**
       * 通过产品类型ID&产品名称分页获取产品列表
       * @param categoryId
       */
      getProductPage(categoryId)
      {
        let basePath = "/pc/goods/search?categoryId="+categoryId+"&current="+this.current;

        //模糊查询判断
        if (this.keyword !== null && this.keyword !== undefined && this.keyword !== "") {
          basePath += "&name=" + this.keyword
        }

        this.axios.get(CONSTANT.baseURL+basePath)
          .then((json)=>{
            if(json.data.code!==CONSTANT.statusCode.SUCCESS)
            {
              CONSTANT.failedAlert('提示',json.data.msg);
              return false;
            }
            else
            {
              this.productPage=json.data.page;
              /*

              //图片数组处理
              this.productPage.records.forEach((obj,i)=>{
                //去除反斜杠
                let reg = new RegExp("\\\\","g");
                obj.images=obj.images.replace(reg,"\\\\");
                //去除数组左右边[]
                obj.images=obj.images.replace("[","").replace("]","").replace(" ","");
                let reg2 = new RegExp('"',"g");
                //去除双引号
                obj.images=obj.images.replace(reg2,"")
                obj.images=obj.images.split(",");
              });

               */

            }
          })
      },
      /**
       * 切换板块
       * @param categoryId
       */
      changeTab(categoryId,breadName)
      {
        this.currentCategoryId=categoryId;
        this.$router.push({
          path:"/product",
          query:{
            categoryid:categoryId,
            page:1,
          }
        })

      },
      //展示商品详情模态框
      getDetail(obj)
      {
        this.productDetail=obj;
        this.showModal=true;
      },
      /**
       * 模糊查询，按类别ID以及模糊名称
       */
      search()
      {
        this.$router.push({
          path: "/product",
          query: {
            page: 1,
            keyword: this.keyword,
            categoryid: this.currentCategoryId
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

  @media screen and (min-width: 769px) {
    .modal-card {
      width: 800px;
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

  /*
    产品列表产品名称文字样式
  */
  .card-content .title {
    font-size: 1.2rem;
    font-weight: normal;
  }

  /**
    模态框内产品简介文字样式
   */
  .modal_detail .descText {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #0088c7;
  }

</style>
