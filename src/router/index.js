import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout/index'
Vue.use(VueRouter)
const routerList = {
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/login/index'),
      meta: { title: '登入页' },
      hidden: true
    },
    {
      path: '/',
      name: 'Home',
      component: Layout,
      redirect: '/index',
      meta: { title: '首页' },
      children: [{
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index'),
        meta: { title: '首页' },
        hidden: true
      }
      ]
    },
    {
      path: '/news',
      component: Layout,
      meta: { title: '分类' },
      children: [{
        path: '/',
        name: 'news',
        component: () => import('@/views/news'),
        meta: { title: '新闻' },
        hidden: true
      },
      {
        path: '/tool',
        name: 'tool',
        component: () => import('@/views/tools'),
        meta: { title: '工具' },
        hidden: true
      },
      ]
    },
    {
      path: '/live',
      component: Layout,
      meta: { title: '直播' },
      children: [{
        path: '/',
        name: 'live',
        component: () => import('@/views/live'),
        meta: { title: '直播' },
        hidden: true
      }
      ]
    },
    {
      path: '/shop',
      component: Layout,
      meta: { title: '商品' },
      children: [{
        path: '/',
        name: 'shop',
        component: () => import('@/views/shop'),
        meta: { title: '商品' },
        hidden: true
      }
      ]
    },
  ]
}
const router = new VueRouter(routerList)
export {
  router,
  routerList
}