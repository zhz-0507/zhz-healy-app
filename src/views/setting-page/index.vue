<template>
  <div class="setting-index">
    <div class="backg">
        <van-nav-bar title="设置">
            <template #left>
                <van-icon name="arrow-left" color="#2a2a2a" size="25"  @click="onClickLeft()"/>
            </template>
        </van-nav-bar>
        <div class="main">
            <div class="item-list">
                <div class="item" @click="goto('means')">
                    <span>个人资料</span>
                    <van-icon name="arrow" size="20" />
                </div>
                <div class="item">
                    <span>账号绑定</span>
                    <van-icon name="arrow" size="20" />
                </div>
                <div class="item">
                    <span>账号安全</span>
                    <van-icon name="arrow" size="20" />
                </div>
            </div>
            <div class="bg"></div>
            <div class="item-list">
                <div class="item">
                    <span>通知</span>
                    <van-icon name="arrow" size="20" />
                </div>
                <div class="item">
                    <span>隐私</span>
                    <van-icon name="arrow" size="20" />
                </div>
            </div>
            <div class="bg"></div>
            <div class="item-list">
                <div class="item">
                    <span>关于作品</span>
                    <van-icon name="arrow" size="20" />
                </div>
            </div>
            <div class="bg"></div>
            <div class="item-list-2">
                <div class="item" @click="handleChange">
                    <span>切换账号</span>
                </div>
            </div>
            <div class="bg"></div>
            <div class="item-list-2">
                <div class="item" @click="handleOut">
                    <span>退出</span>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script>

// import LoginCom from '@/components/login-com/index.vue'
import { Dialog } from 'vant';
export default {
  components: {
   
  },
  data() {
    return {

    }
  },
  mounted() {
  


  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },

    // 切换账号
    handleChange() {

    },

    // 退出
    handleOut() {
      Dialog.confirm({
        title: '确定退出',
      }).then(res => {
        //处理退出
        console.log(res)
      });
      
    }
  }

}
</script>