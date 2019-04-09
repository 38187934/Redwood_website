import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

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
    }
  ]
})
