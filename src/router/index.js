import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    redirect: '/home/articleCreate',
    component: () => import('@/views/admin/home.vue'),
    children: [{
        path: 'index',
        name: 'homeindex',
        meta: {
          title: "首页"
        },
        component: () => import('@/views/admin'),
      },
      {
        path: 'articleCreate',
        name: 'articleCreate',
        meta: {
          title: "文章创建"
        },
        component: () => import('@/views/admin/articleCreate'),
      },
      {
        path: 'articleList',
        name: 'articleList',
        meta: {
          title: "文章列表"
        },
        component: () => import('@/views/admin/articleList'),
      },

    ]
  },
  {
    path: '/',
    redirect: "home",
  },
  {
    path: '/mixin_filter_directive',
    name: 'mixin_filter_directive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/mixin_filter_directive.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/vuex.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../components/editor.vue')
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import('../views/test1.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/table.vue')
  },
  {
    path:"*",
    redirect: "home",
  }
]

const router = new VueRouter({
  routes
})

//Uncaught (in promise) Error: Avoided redundant navigation to current location: "/home/index". 解决重复点击路由导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router