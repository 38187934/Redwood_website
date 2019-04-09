<template>
  <div>
    <footer class="footer">
      <div class="content ">
        <div class="container">

          <div class="columns is-multiline is-desktop is-mobile">
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
            </div>
            <div class="column is-4-mobile">
              <a class="button is-white">友情链接</a>
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
                    湖南科义生物
                  </div>
                  <div class="hsubtitle">
                    HUNAN KE YI SHENGWU
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-7-desktop is-12-mobile">

              <p>Copyright &copy;2019 湖南宁乡科义生物有限公司 版权所有 备案号:湘ICP备xxxxxxxx号</p>
              <p>公司地址：湖南省宁乡某某区某某街道多少号</p>
              <p>全国服务热线：xxxxxxxxx</p>

            </div>

          </div>


        </div>

      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "footer"
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
