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

        <div class="main" v-else-if="type == 'first'">
                <div class="question-wrapper">
                    <div class="question">{{cur.title}}</div>
                </div>
                <van-radio-group v-model="radio">
                    <van-cell-group @click="change()"> 
                        <van-cell clickable  center @click="radio = 'A'">
                            <template #title>
                                <span class="custom-title">A</span>
                                <span class="custom-title-body">{{cur.a}}</span>
                            </template>
                            <template #right-icon>
                                <van-radio name="A" icon-size="18px"/>
                            </template>
                        </van-cell>
                        <van-cell center clickable @click="radio = 'B'">
                            <template #title>
                                <span class="custom-title">B</span>
                                <span class="custom-title-body">{{cur.b}}</span>
                            </template>
                            <template #right-icon>
                                <van-radio name="B" icon-size="18px"/>
                            </template>
                        </van-cell>
                        <van-cell center clickable @click="radio = 'C'">
                            <template #title>
                                <span class="custom-title">C</span>
                                <span class="custom-title-body">{{cur.c}}</span>
                            </template>
                            <template #right-icon>
                                <van-radio name="C" icon-size="18px"/> 
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
                <div class="main-button">
                    <van-button type="primary" block color="#5f7ef5" @click="goTo()" v-show="index!==0">上一题</van-button>
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
import { getTestDetail } from '../../services/home'

export default {
  components: {
    
  },
  data() {
    return {
      type:"start",
      cur:[],
    }
  },

  created() {
    this.requestList();
  },

  methods:{
    handleTest(type) {
      console.log(type)
      this.type = type
    },

    async requestList() {
      const res = await getTestDetail(1,5);
      console.log(res)
    }

  }

}
</script>