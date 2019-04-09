<!--
  首页Vue
-->
<template>
  <div>

    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-full">
          <!--导航栏-->
          <Header></Header>
        </div>

      </div>
    </div>

    <!--轮播-->
    <div>
      <Slider></Slider>
    </div>

    <!--科学研究-->
    <div class="container science_research">
      <div class="columns">
        <div class="column is-7 is-12-mobile">
          <h1 class="title">科学研究</h1>
          <div>
            <p class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            </p>
          </div>
        </div>

        <div class="column is-5 is-12-mobile">
          <img src="@/assets/right-1.jpg" alt="">
        </div>
      </div>
    </div>


    <!--实验室-->
    <div class="laboratory">
      <div class="container">

        <div class="columns is-desktop is-mobile has-text-centered">
          <div class="column is-full">
            <h1 class="title">实验室</h1>
            <h2>Laboratory</h2>
          </div>
        </div>

        <div class="columns">

          <div class="column is-4">

            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="图片">
                </figure>
              </div>
            </div>

          </div>

          <div class="column is-4">

            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="图片">
                </figure>
              </div>
            </div>

          </div>

          <div class="column is-4">

            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="图片">
                </figure>
              </div>
            </div>

          </div>

        </div>


      </div>

    </div>


    <!--介绍信息-->
    <div class="information">
      <div class="container">
        <div class="columns">
          <!--左侧div-->
          <div class="column is-6 has-text-centered">
            <img style="width:80%" src="@/assets/exper.jpg" alt="">
          </div>
          <!--右侧div-->
          <div class="column is-6">

            <div class="columns">
              <!--右侧上方div-->
              <div class="column is-full">
                <h1 class="title">一级标题</h1>
                <p class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                  gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                  Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
                  luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
              </div>
            </div>
            <!--右侧下方div-->
            <div class="columns">
              <div class="column is-6">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="图片">
                    </figure>
                  </div>
                </div>

              </div>

              <div class="column is-6">

                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="图片">
                    </figure>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>


    <div>
      <Footer></Footer>
    </div>


  </div>

</template>

<script>


  import Header from "../components/header";
  import Slider from "../components/slider";
  import Footer from "../components/footer";

  export default {
    name: "index",
    components: {Footer, Slider, Header},
    mounted() {

    }
  }
</script>

<style scoped>

  .title {
    font-size: 2rem;
    font-weight: 600;
    display: block;
    margin-bottom: 0;
  }

  .science_research {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  html {
    overflow-x: hidden;
  }

  .laboratory {
    text-align: center;
    background-color: rgba(242, 242, 242, 1);
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .content {
    margin-top: 0.5rem;
  }

  .information
  {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }


</style>
