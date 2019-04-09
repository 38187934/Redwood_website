<!--suppress ALL -->
<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a class="navbar-item" href="">
          <div class="columns is-desktop is-mobile" style="width:20rem;">
            <div class="column is-3-desktop is-3-mobile" >
              <img src="@/assets/logo.png" style="max-height:3.8rem;">
            </div>
            <div class="column is-9-desktop is-9-mobile" style="text-align: left;">
              <div class="htitle">
                湖南科义生物
              </div>
              <div class="hsubtitle">
                HUNAN KE YI SHENGWU
              </div>
            </div>
          </div>

        </a>

        <!--手机端展示全部菜单按钮-->
        <a role="button" class="navbar-burger burger" style="margin-top:0.5rem;" aria-label="menu" aria-expanded="false"
           v-on:click="(isActive===false)?isActive=true:isActive=false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!--菜单主体-->
      <div id="navBar" class="navbar-menu" v-bind:class="{'is-active':isActive}">
        <div class="navbar-start">
          <a class="navbar-item" :class="nIndex==0?'active':''" @click="jumpPage('/')">
            首页
          </a>

          <a class="navbar-item" :class="nIndex==1?'active':''" @click="jumpPage('/about')">
            关于科义
          </a>

          <a class="navbar-item" :class="nIndex==2?'active':''" @click="jumpPage('/product')">
            产品中心
          </a>

          <a class="navbar-item" :class="nIndex==3?'active':''" @click="jumpPage('/techlecture')">
            技术讲座
          </a>

          <a class="navbar-item" :class="nIndex==4?'active':''">
            行业知识
          </a>

          <a class="navbar-item" :class="nIndex==5?'active':''">
            新闻动态
          </a>

          <a class="navbar-item" :class="nIndex==6?'active':''">
            联系我们
          </a>


        </div>

      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        isActive: false
      }
    },
    props:{
      nIndex:{
        type:Number,
        required:true
      }
    },
    methods:{
      /**
       * 路由跳转
       * @param path
       */
      jumpPage(path){
        //根据path进行路由跳转，实现页面跳转。
        this.$router.push({
          path:path
        })
      }
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 1088px) {
    .navbar.is-spaced {
      /*padding: 1rem 2rem;*/
      text-align: center;
    }

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


    /*头部菜单内容样式*/
    .navbar .navbar-start .navbar-item
    {
      height:100%;
      margin-right:0;
      /*padding-top:1rem;*/
      /*padding-bottom:1rem;*/
      /*width:6rem;*/
      /*text-align: center;*/
      padding-left:1.7rem;
      padding-right:1.7rem;
    }

    /*头部Logo区域样式*/
    .navbar .navbar-brand .navbar-item
    {
      padding-top:1rem;
      padding-bottom:1rem;
    }

  }

  /*手机端头部样式*/
  @media screen and (max-width:400px)
  {
    /*手机端大标题样式*/
    .htitle
    {
      font-size:1.5rem;
      font-weight:800;
      margin-top:0.2rem;
      margin-bottom:-0.2rem;
      padding-bottom:0;
    }
    /*手机端小标题样式*/
    .hsubtitle
    {
      font-weight:500;
    }
  }

  /*菜单内容居中*/
  .navbar .navbar-start
  {
    text-align:center;
  }


  /*去除框架内自带边框圆角*/
  .navbar.is-spaced a.navbar-item {
    border-radius: 0px;
  }


  /*hover样式*/
  .navbar .navbar-item:hover
  {
    background: transparent;
    color:black;
  }

  /*选中菜单内容hover样式*/
  .navbar  a.navbar-item.active:hover
  {
    color:#007ac7;
    border-bottom:3px solid #007ac7;
  }

  /*选中样式*/
  .active
  {
    color:#007ac7;
    border-bottom:3px solid #007ac7;
  }

</style>
