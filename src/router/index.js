import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 路由重定向
  { path: '/', redirect: '/home' },
  // 登录路由
  { path: '/login', name: 'Login', component: () => import('@/views/login') },
  // 首页路由
  { path: '/home', name: 'Home', component: () => import('@/views/home') }
]

const router = new VueRouter({
  routes
})

export default router
