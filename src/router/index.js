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
  },
  {
    path: '/set',
    name: 'Set',
    component: () => import(/* webpackChunkName: "about" */ '../views/setting-page/index.vue')
  },
  {
    path: `/itemDetail`,
    name: 'ItemDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/item-detail/index.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "about" */ '../views/publish-page/map.vue')
  },
  {
    path: '/means',
    name: 'Means',
    component: () => import(/* webpackChunkName: "about" */ '../views/setting-page/Means.vue')
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import(/* webpackChunkName: "about" */ '../views/test-page/teacher.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/home-page/detail.vue')
  },
  {
    path: '/swipertext/:id',
    name: 'swipertext',
    component: () => import(/* webpackChunkName: "login" */ '../components/swiper/text.vue'),
  },
  {
    path: '/sleep',
    name: 'Sleep',
    component: () => import(/* webpackChunkName: "login" */ '../views/cute-page /sleep/sleep.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
