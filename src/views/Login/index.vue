<template>
  <div class="login-index">
    <div class="login-header">
      <div class="txt-t">欢迎来到我的毕业设计</div>
      <div class="txt-b">每日一用 消除烦恼</div>
    </div>

    <LoginCom ref="refLoginCom"></LoginCom>

    <div class="sub-btn">    
      <van-button round block type="info" @click="handleLogin">登录</van-button>
    </div>

    <div class="login-footer">
      <span @click="goToForgot">忘记密码?</span>
      <span @click="goToRegister">用户注册</span>
    </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>

// 组件
import LoginCom from '@/components/login-com/index.vue'

// 接口
import {postLogin} from '../../services/login'

export default {
  components: {
    LoginCom,
  },
  data() {
    return {
      
    }
  },
  methods:{
    // 登录前都去校验一遍
    handleLogin() {
      let res = this._checkAll();
      console.log('----',res);
      if(res.status) {
        this.submitParams();
      }
    },

    // 请求登录接口
    async submitParams() {
      let formData = this._getParamsByLogin()
      let res = await postLogin(formData);
      if(res && res.resultCode == 200) {
        let token = res.data.token;
        localStorage.setItem('token',token)
        this.$toast('登录成功');
        setTimeout(() => {
          window.location.href = './home';
        },200)
      }
    },


    // 登录参数
    _getParamsByLogin() {
      let formData = {};
      let telephone = this.$refs.refLoginCom.$_getData().tel;
      let password = this.$refs.refLoginCom.$_getData().password;
      formData = {
        loginName:telephone,
        password:password,
      }

      return formData
    },

    // 忘记密码
    goToForgot() {
      this.$router.push(`/forgot`); 
    },

    // 去注册
    goToRegister() {
      this.$router.push(`/register`); 
    },

    // 统一校验
    _checkAll() {
      let res = this.$refs.refLoginCom.$_verify()
      return res;
    }

  }

}
</script>