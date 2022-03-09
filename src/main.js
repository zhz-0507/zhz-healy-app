import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import '@/common/style/reset.css';

import './utils/vant/index';
import "@/assets/font/iconfont.css";
// import BaiduMap from 'vue-baidu-map';
// Vue.use(BaiduMap, {
//       ak: 'oZYQ0hx6cS1bIQG15hvUdP36qy6LLhIm'
// })
import AMap from 'vue-amap';
Vue.use(AMap);
 
  // 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '26b7a90ad07d4822374791b67e78d9de',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
