<template>
  <div class="forget-password-index">
    <div class="forget-header">
      <div class="txt-t">欢迎来到我的毕业设计</div>
      <div class="txt-b">每日一用 消除烦恼</div>
    </div>
    <ForgetCom ref="refForget" @onhandleUpdate="onhandleUpdate"></ForgetCom>
    <div class="sub-btn">    
      <van-button round block type="info" @click="handleForgot">修改</van-button>
    </div>

    <div class="forget-footer">
      <span @click="goBack">返回</span>
    </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>
// 组件
import ForgetCom from '@/components/forget-com/index.vue'
// api
import {updatePassword,validateCode} from "../../services/login.js"

export default {
  components: {
    ForgetCom
  },
  data() {
    return {
      randomNum:'',
    }
  },

  methods:{
    handleForgot() {    
      let res = this._checkAll();
      console.log('----',res);
      if(res.status) {
        this.submitParams();
      }
    },

    onhandleUpdate() {
      this.$refs.refForget.sendRandom()
    },

    // 请求更新接口
    async submitParams() {
      let formData = this._getParamsByForget();
      console.log('提交的参数',formData)

      let res = await updatePassword(formData);
      if(res && res.resultCode == 200) {
        this.$toast('密码更新成功');
        setTimeout(() => {
          this.$router.push(`/login`); 
        },200)
      }
    
    },

    // 忘记密码参数
    _getParamsByForget() {
      let formData = {};
      let telephone = this.$refs.refForget.$_getData().tel;
      let password = this.$refs.refForget.$_getData().passwordTwo;
      let random = this.$refs.refForget.$_getData().random;
      formData = {
        loginName:telephone,
        password:password,
        random:random,
      }

      return formData
    },

    goBack() {
      this.$router.push(`/login`); 
    },

    // 统一校验
    _checkAll() {
      let res = this.$refs.refForget.$_verify()
      return res;
    }
  }
}
</script>