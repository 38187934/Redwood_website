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

    <div>
      <img src="@/assets/about_banner.jpg" style="width:100%;" alt="">
    </div>


    <div class="columns" style="background-color: rgba(242, 242, 242, 1);">

      <div class="column">
        <div class="container">
          您现在的位置： 首页 > 技术讲座 > 水产系列
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

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab active">
                水产系列
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab">
                化药系列
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab">
                针剂系列
              </div>
            </div>
          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <div class="infoPanel">
            <div class="columns">
              <div class="column">
                <h2 class="title">水产系列</h2>
              </div>
              <div class="column">

                <div class="columns has-text-right is-desktop is-mobile">
                  <div class="column is-6-desktop is-9-mobile is-offset-4-desktop">
                    <input class="input is-rounded" type="text" placeholder="请输入产品名称">
                  </div>
                  <div class="column is-2-desktop is-3-mobile">
                    <a class="button is-info is-rounded">搜索</a>
                  </div>
                </div>
              </div>
            </div>

            <hr>


            <div class="columns is-multiline">
              <div class="column is-4">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="title">产品名称</h2>
                  </div>
                </div>

              </div>


              <div class="column is-4">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="title">产品名称</h2>
                  </div>
                </div>

              </div>
              <div class="column is-4">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="title">产品名称</h2>
                  </div>
                </div>

              </div>
              <div class="column is-4">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="title">产品名称</h2>
                  </div>
                </div>

              </div>
              <div class="column is-4">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="title">产品名称</h2>
                  </div>
                </div>

              </div>

              <div class="column is-4">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 class="title">产品名称</h2>
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

  export default {
    name: "about",
    components: {Footer, Header}
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
    margin-top:1rem;
  }

  .infoPanel

  .infoPanel .column
  {
    margin-bottom: 0;
  }

  .rightPanel
  {
    margin-bottom:3rem;
  }

  .card-content .title
  {
    font-size:1.2rem;
    font-weight: normal;
  }
</style>
