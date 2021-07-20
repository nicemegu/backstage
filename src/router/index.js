import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout/index';
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
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
    {
      path: '/tiktok',
      component: Layout,
      meta: { title: '抖音' },
      children: [{
        path: '/',
        name: 'tiktok',
        component: () => import('@/views/tiktok'),
        meta: { title: '抖音' },
        hidden: true
      }
      ]
    },
    {
      path: '/Illustration',
      component: Layout,
      meta: { title: '插画' },
      children: [{
        path: '/',
        name: 'Illustration',
        component: () => import('@/views/Illustration'),
        meta: { title: '插画' },
        hidden: true
      }
      ]
    },
    {
      path: '/Excel',
      component: Layout,
      meta: { title: 'Excel' },
      children: [{
        path: '/export',
        name: 'Excel',
        component: () => import('@/views/Excel/export'),
        meta: { title: 'Excel导出' },
        hidden: true
      },
      {
        path: '/Import',
        name: 'Excel',
        component: () => import('@/views/Excel/import'),
        meta: { title: 'Excel导人' },
        hidden: true
      },
      ]
    },
  
    {
      path: '/404',
      component: Layout,
      meta: { title: '404' },
      children: [{
        path: '/',
        name: '404',
        component: () => import('@/views/404'),
        meta: { title: '404' },
        hidden: true
      }
      ]
    },
  ]
}
const router = new VueRouter(routerList)
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})
router.afterEach(() => {
  Nprogress.done()
})
export {
  router,
  routerList
}