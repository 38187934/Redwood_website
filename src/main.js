// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Bulma.css
import 'bulma/css/bulma.min.css'

//引入VueAwesomeSwiper轮播
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

//引入Vue Baidu Map百度地图组件
import BaiduMap from 'vue-baidu-map';

//引入axios
import axios from 'axios'

//引入vue-axios
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

Vue.use(BaiduMap,{
  ak:"YFE4rL2suqLEeuEGUA6dzxyUeCmpR3ad"
})

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/**
 * 动态修改路由Title
 */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


