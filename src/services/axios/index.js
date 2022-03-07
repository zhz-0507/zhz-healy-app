import axios from 'axios';
import Vue from 'vue'
// import router from '../router'
import { Toast } from 'vant';

Vue.use(Toast);
// 项目的请求地址为 .newapibee.ltd/api/v1
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://120.53.244.206:8404/api/v1' : 'http://120.53.244.206:8404/api/v1'

axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

// 判断用户登陆状态是通过token实现
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// post 请求时，发送 json 形式的数据包
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 返回的数据可以通过拦截处理后返回
axios.interceptors.response.use(res => {
  if(typeof res.data !== 'object'){
    return Promise.reject(res)
  }
  if(res.data.resultCode != 200){
      if(res.data.message) {
        Toast(res.data.message);
      }
      if(res.data.resultCode == 416){
          // 返回416代表没有登录状态，路由跳转到login页面
        //   router.push({path:'/login'})
      }
      return Promise.reject(res.data)
  }
  return res.data
})

export default axios