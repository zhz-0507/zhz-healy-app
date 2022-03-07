import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'

// import ForgetPassword from '../views/forget-password/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  { path: '/', redirect: { name: 'login' } },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import(/* webpackChunkName: "about" */ '../views/forget-password/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home-page/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/index.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/my-page/index.vue')
  },
  {
    path: '/publish',
    name: 'Publish',
    component: () => import(/* webpackChunkName: "about" */ '../views/publish-page/index.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test-page/index.vue')
  },
  {
    path: '/cute',
    name: 'Cute',
    component: () => import(/* webpackChunkName: "about" */ '../views/cute-page /index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
