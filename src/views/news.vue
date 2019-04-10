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
          您现在的位置： 首页 > 新闻动态 > 科义新闻
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

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab active">
                科义新闻
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab">
                行业新闻
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
                <h2 class="title">科义新闻</h2>
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


            <div class="columns is-multiline is-desktop is-mobile">

              <div class="column k-list is-12" v-for="n in 10">
                <div class="columns">
                  <div class="column has-text-left">
                    <p>喜讯：增值税16%降至13%，10%降至9%，6%不变</p>
                  </div>
                  <div class="column has-text-right">2019-04-10</div>
                </div>
              </div>

            </div>

            <div class="columns ">
              <div class="column">
                <nav class="pagination" role="navigation" aria-label="pagination">
                  <ul class="pagination-list has-text-centered">
                    <li>
                      <a class="pagination-link">&lt;</a>
                    </li>
                    <li v-for="n in 5">
                      <a class="pagination-link">{{n}}</a>
                    </li>

                    <li>
                      <a class="pagination-link">&gt;</a>
                    </li>

                  </ul>
                </nav>
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
    name: "industryknowledge",
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
    margin-top: 1rem;
  }

  .infoPanel
  .infoPanel .column {
    margin-bottom: 0;
  }

  .rightPanel {
    margin-bottom: 3rem;
  }

  .k-list{
    border-bottom: 2px solid #f5f5f5;
  }



</style>
