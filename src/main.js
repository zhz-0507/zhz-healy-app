import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import '@/common/style/reset.css';

import './utils/vant/index';
import "@/assets/font/iconfont.css";
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
      ak: 'oZYQ0hx6cS1bIQG15hvUdP36qy6LLhIm'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
