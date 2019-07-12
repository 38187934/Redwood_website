<template>
  <div>
    <footer class="footer">
      <div class="content ">
        <div class="container">

          <div class="columns is-multiline is-desktop is-mobile">
            <div class="column is-1-desktop is-4-mobile has-text-centered" v-for="item in favoriteLinkList">
              <a class="button is-white" target="_blank" :href="item.url">{{item.name}}</a>
            </div>
          </div>

          <hr>


          <div class="columns is-desktop is-mobile is-multiline">
            <div class="column is-3-desktop is-12-mobile is-offset-2-desktop has-text-right">
              <div class="columns is-desktop is-mobile">
                <div class="column is-3-desktop is-3-mobile has-text-left">
                  <img src="@/assets/logo.png" style="max-height:3.8rem;">
                </div>
                <div class="column is-9-desktop is-9-mobile" style="text-align: left;">
                  <div class="htitle">
                    真科生物
                  </div>
                  <div class="hsubtitle">
                    ZHEN KE SHENGWU
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-7-desktop is-12-mobile">

              <p>Copyright &copy;2019 湖南真科生物技术有限公司 版权所有 备案号:湘ICP备19001809号-1</p>
              <p>公司地址：湖南省长沙市宁乡经济技术开发区谐园北路玉屏山国际产业城D组团D5栋205</p>
              <p>全国服务热线：18711704010</p>

            </div>

          </div>


        </div>

      </div>
    </footer>
  </div>
</template>

<script>
  import CONSTANT from '../assets/constant'
  export default {
    name: "kfooter",
    data(){
      return{
        favoriteLinkList:null
      }
    },
    mounted() {
      this.getFavoriteLinkList();
    },
    methods:{
      /**
       * 获取友情链接列表
       */
      getFavoriteLinkList()
      {
        this.axios.get(CONSTANT.baseURL+"/pc/favorite/links")
          .then((json)=>{
            if (json.data.code !== CONSTANT.statusCode.SUCCESS) {
              CONSTANT.failedAlert('提示', json.data.msg);
              return false;
            }
            else
            {
              this.favoriteLinkList=json.data.links
            }
          })
      }
    }
  }
</script>

<style scoped>
  @media all and (min-width: 1088px)
  {
    /*大标题*/
    .htitle
    {
      font-size:2rem;
      font-weight:800;
      margin-bottom:-0.2rem;
      padding-bottom:0;
      margin-top:-0.25rem;
    }
    /*英文小标题*/
    .hsubtitle
    {
      font-weight:600;
    }
  }

  @media screen and (max-width:400px)
  {
    .htitle
    {
      font-size:1.5rem;
      font-weight:800;
      margin-top:0.2rem;
      margin-bottom:-0.2rem;
      padding-bottom:0;
    }
    .hsubtitle
    {
      font-weight:500;
    }
  }
</style>
