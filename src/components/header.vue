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
          <a class="navbar-item active">
            首页
          </a>

          <a class="navbar-item">
            关于科义
          </a>

          <a class="navbar-item">
            产品中心
          </a>

          <a class="navbar-item">
            技术讲座
          </a>

          <a class="navbar-item">
            行业知识
          </a>

          <a class="navbar-item">
            新闻动态
          </a>

          <a class="navbar-item">
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


    .navbar .navbar-start .navbar-item
    {
      height:100%;
      margin-right:0;
      padding-top:1rem;
      padding-bottom:1rem;
      /*width:6rem;*/
      /*text-align: center;*/
      padding-left:1.7rem;
      padding-right:1.7rem;
    }

    .navbar .navbar-brand .navbar-item
    {
      padding-top:2rem;
      padding-bottom:2rem;
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

  .navbar .navbar-item{

  }
  .navbar .navbar-start
  {
    text-align:center;
  }



  .navbar.is-spaced a.navbar-item {
    border-radius: 0px;
  }

  .navbar .navbar-item:hover
  {
    background: transparent;
    color:black;
  }

  .navbar  a.navbar-item.active:hover
  {
    background: rgba(22, 155, 213, 1);
    color:white;
  }

  .active
  {
    background: rgba(22, 155, 213, 1);
    color:white;
  }

</style>
