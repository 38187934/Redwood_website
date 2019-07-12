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
//行业知识
import IndustryKnowledge from '@/views/industryknowledge'
//新闻动态
import News from '@/views/news';
//联系我们
import Contact from '@/views/contact'

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
        title:"真科生物 - 首页"
      }
    },
    {
      path: '/about',
      name: 'About',
      component:About,
      meta:{
        title:"真科生物 - 关于真科"
      }
    },
    {
      path: '/product',
      name: 'Product',
      component:Product,
      meta:{
        title:"真科生物 - 产品中心"
      }
    },
    {
      path: '/techlecture',
      name: 'Techlecture',
      component:Techlecture,
      meta:{
        title:"真科生物 - 技术讲座"
      }
    },
    {
      path: '/industryknowledge',
      name: 'IndustryKnowledge',
      component:IndustryKnowledge,
      meta:{
        title:"真科生物 - 行业知识"
      }
    },
    {
      path: '/news',
      name: 'News',
      component:News,
      meta:{
        title:"真科生物 - 新闻动态"
      }
    }
    ,
    {
      path: '/contact',
      name: 'Contact',
      component:Contact,
      meta:{
        title:"真科生物 - 联系我们"
      }
    }
  ]
})
