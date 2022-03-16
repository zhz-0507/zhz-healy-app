<template>
  <div class="test-index">
    <van-nav-bar title="测试健康状态"></van-nav-bar>
      <div class="test-wrapper">
        <div class="main" v-if="type == 'start'">
          <div class="title">
            <span>测你的左右脑</span>
          </div>
          <div class="main-img">
            <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/87a1d9bd79fc06e4877a80b635dd122.png" alt="">
          </div>
          <div class="main-text">
            <span>大脑左半球控制语言、逻辑思维和理性，相反，大脑右半球则掌管着创造性和直觉。</span>
          </div>
          <div class="main-button">
            <van-button type="primary" block color="#5f7ef5" @click="handleTest('first')">开始测试</van-button>
          </div>
        </div>
      </div>
      
      
      
   
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>

// import LoginCom from '@/components/login-com/index.vue'

export default {
  components: {
    
  },
  data() {
    return {
      type:"start",
    }
  },
  methods:{
    handleTest() {

    },

  }

}
</script>