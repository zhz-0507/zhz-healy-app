<template>
  <div class="register-com-index">
    <div class="com-from">
      <van-field v-model="tel" @blur="handleBlurTel" placeholder="请输入手机号" :error-message="telError" type="tel" label="手机号" />
      <van-field v-model="password"  @blur="handleBlurPassWord" placeholder="请输入密码" :error-message="passwordError"  type="password" label="密码" />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        :error-message="smsError"
      >
        <template #button>
          <div class="sms-btn" v-show="show" @click="handleSendSms">获取验证码</div>
          <div class="sms-btn" v-show="!show" @click="handleSendSms">{{auth_time}} 秒后重新发送</div>
        </template>
      </van-field>
    </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>
import {getMessageCode} from "../../services/login"

export default {
  components: {
   
  },
  data() {
    return {
      tel:'',
      password:"",
      sms:"",
      telError:'',
      passwordError:'',
      smsError:'',

      show:true,
      auth_time:'60',
    }
  },

  methods:{
    $_setData(val) {
      this.tel = val.tel;
      this.password = val.password;
    },

    $_getData() {
      return {
        tel:this.tel,
        password:this.password,
        sms:this.sms
      }
    },

     $_verify() {
      let res = this._checksms();
      return res;
    },

    // 发送验证码
    handleSendSms() {
      this.requestSms(this.tel);
    },

    // 获取验证码
    async requestSms(tel) {
      if(!tel) {
        this.$toast('请先输入手机号');
      }else {
        const res = await getMessageCode(tel);
        if(res && res.resultCode == 200) {
          this.$toast('验证码获取成功');
          this.show = false;
          let auth_timetimer =  setInterval(()=>{
            this.auth_time--;
            if(this.auth_time<=0){
                this.show = true;
                clearInterval(auth_timetimer);
                this.auth_time = 60;
            }
          }, 1000);
        }else {
          this.$toast('验证码获取失败');
        } 
      }
    },


    handleBlurTel() {
      this._checkTel();
    },

    handleBlurPassWord() {
      this._checkpassword();
    },

    // 校验手机号
    _checkTel() {
      let message = "";
      let res = true;
      if (!this.tel) {
        message = "请输入手机号";
        res = false;
      } else {
        if (this.tel.length > 11) {
          message = "手机号不能超过11位";
          res = false;
        } 
        if(this.tel.length < 11) {
          message = "请输入正确手机号格式";
          res = false;
        }
      }
      this._setError('telError', message);
      return { status: res, message }
    },

    // 校验密码
    _checkpassword() {
      let message = "";
      let res = true;
      if (!this.password) {
        message = "请输入密码";
        res = false;
      } else {
        if (this.password.length < 5) {
          message = "密码长度不能小于6位";
          res = false;
        } 
      }
      this._setError('passwordError', message);
      return { status: res, message }
    },

    // 校验验证码
    _checksms() {
      let message = "";
      let res = true;
      if (!this.sms) {
        message = "请输入验证码";
        res = false;
      }
      this._setError('smsError', message);
      return { status: res, message }
    },



    _setError(key, msg) {
	    this[key] = "";
	    if (msg) {
	      this.$nextTick(() => {
	        this[key] = msg;
	      });
	    }
	  },


  }


}
</script>