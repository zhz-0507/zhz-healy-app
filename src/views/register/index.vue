<template>
  <div class="register-index">
    <div class="register-header">
      <div class="txt-t">心灵健康治愈系统</div>
      <div class="txt-b">拒绝忧虑 消除烦恼</div>
    </div>

    <RegisrterCom ref="refRegister"></RegisrterCom>
    <div class="sub-btn">    
      <van-button round block type="info" @click="handleReigster">注册</van-button>
    </div>

    <div class="register-footer">
      <span @click="goBack">返回</span>
    </div>
    
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>

// 组件
import RegisrterCom from '@/components/register-com/index.vue'

// api
import {postRegister} from "../../services/login.js"
export default {
  components: {
    RegisrterCom
  },
  data() {
    return {

    }
  },

  methods:{
    handleReigster() {
      let res = this._checkAll();
      console.log('----',res);
      if(res.status) {
        this.submitParams();
      }
    },

    // 请求注册接口
    async submitParams() {
      let formData = this._getParamsByRegister();
      console.log('提交的参数',formData)

      const res = await postRegister(formData);
      if(res && res.resultCode == 200) {
        this.$toast('注册成功');
        setTimeout(() => {
          this.$router.push(`/login`); 
        },200)
      }

      
    },

    // 注册参数
    _getParamsByRegister() {
      let formData = {};
      let telephone = this.$refs.refRegister.$_getData().tel;
      let password = this.$refs.refRegister.$_getData().password;
      let sms = this.$refs.refRegister.$_getData().sms;
      formData = {
        loginName:telephone,
        password:password,
        sms:sms,
      }

      return formData
    },

    // 返回
    goBack() {
      this.$router.push(`/login`); 
    },

    // 统一校验
    _checkAll() {
      let res = this.$refs.refRegister.$_verify()
      return res;
    }
    
  }
}
</script>