<template>
  <div class="login-com-index">
    <div class="com-from">
      <van-field v-model="tel" @blur="handleBlurTel" placeholder="请输入手机号" :error-message="telError" type="tel" label="手机号" />
      <van-field v-model="password"  @blur="handleBlurPassWord" placeholder="请输入密码" :error-message="passwordError"  type="password" label="密码" />
    </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>

export default {
  components: {

  },
  data() {
    return {
      tel:'',
      password:"",
      telError:'',
      passwordError:'',
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
      }
    },

    $_verify() {
      let res = this._checkpassword();
      return res;
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