<template>
  <div>
    <!--头部-->
    <div class="container">
      <div class="columns">
        <div class="column">
          <Header :n-index="1"></Header>
        </div>
      </div>
    </div>

    <div>
      <img src="@/assets/about_banner.jpg" style="width:100%;" alt="">
    </div>


    <div class="columns" style="background-color: rgba(242, 242, 242, 1);">

      <div class="column">
        <div class="container">
          您现在的位置： 首页>关于科义 > 企业介绍
        </div>
      </div>

    </div>

    <div class="container">

      <div class="columns">
        <!--左侧DIV-->
        <div class="column is-3-desktop is-full-mobile menuCol">
          <div class="aboutTab">
            <p>关于科义</p>
            <p style="font-size:0.9rem">About Us</p>
          </div>

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab active">
                企业介绍
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab">
                企业文化
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-12">
              <div class="menuTab">
                企业荣誉
              </div>
            </div>
          </div>


        </div>
        <!--右侧DIV-->
        <div class="column is-9-desktop is-full-mobile rightPanel">

          <div class="infoPanel">
            <h2>企业介绍</h2>
            <hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            </p>
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

  }

  .rightPanel
  {
    margin-bottom:3rem;
  }
</style>
