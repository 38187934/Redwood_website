import Vue from 'vue'
import Router from 'vue-router'
//首页
import Index from '@/views/index'
//关于我们
import About from '@/views/about'
//产品中心
import Product from '@/views/product'
//技术讲座
import Techlecture from '@/views/techlecture'

Vue.use(Router)

/**
 * 路由配置
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component:Index,
      meta:{
        title:"湖南科义生物 - 首页"
      }
    },
    {
      path: '/about',
      name: 'About',
      component:About,
      meta:{
        title:"湖南科义生物 - 关于科义"
      }
    },
    {
      path: '/product',
      name: 'Product',
      component:Product,
      meta:{
        title:"湖南科义生物 - 产品中心"
      }
    },
    {
      path: '/techlecture',
      name: 'Techlecture',
      component:Techlecture,
      meta:{
        title:"湖南科义生物 - 技术讲座"
      }
    }
  ]
})
