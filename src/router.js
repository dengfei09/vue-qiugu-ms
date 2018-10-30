import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constRouterMap = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    // redirect: '/login',
    // redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          keepAlive: true
        },
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title: '开发备忘',
          keepAlive: false
        },
        component: () => import('@/views/About.vue')
      },
      {
        path: '/author',
        name: 'author',
        meta: {
          title: '关于作者',
          keepAlive: true
        },
        component: () => import('@/views/AboutAuthor.vue')
      },
      {
        path: '/weather',
        name: 'wether-fore',
        meta: {
          title: '天气预报',
          keepAlive: true
        },
        component: () => import('@/views/WeatherFore.vue')
      },
      {
        path: '/dynamic',
        name: 'dynamic-table',
        meta: {
          title: '动态表格',
          keepAlive: false
        },
        component: () => import('@/views/DynamicTable.vue')
      },
      {
        path: '/editable',
        name: 'editable',
        meta: {
          title: '可编辑表格',
          keepAlive: true
        },
        component: () => import('@/views/TableGrid.vue')
      }
    ]
  }    
]

export const asyncRouterMap = [
  {
    path: '/index',
    name: 'layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/access',
        name: 'access',
        component: () => import('@/views/AccessTest.vue'),
        meta: {
          title: '权限控制',
          roles: ['admin']
        }
      },
      {
        path: '/cube',
        name: 'cube',
        component: () => import('@/views/MagicCube.vue'),
        meta: {
          title: '魔幻立方',
          roles: ['admin']
        }
      },
      {
        path: '/error',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  },
  {
    path: '*', redirect: '/error', hidden: true
  }
]

let router = new Router({
  mode: 'history',
  routes: constRouterMap
})

export default router