<template>
  <div class="test-index">
    <van-nav-bar title="测试健康状态"></van-nav-bar>
      <div class="test-wrapper">
        <div class="main" v-if="type == 'start'">
          <div class="title">
            <span>测你的左右脑</span>
          </div>
          <div class="main-img">
            <img src="../../assets/test/QQ20220326-4.png" alt="">
          </div>
          <div class="main-text">
            <span>大脑左半球控制语言、逻辑思维和理性，相反，大脑右半球则掌管着创造性和直觉。</span>
          </div>
          <div class="main-button">
            <van-button type="primary" block color="#5f7ef5" @click="handleTest">开始测试</van-button>
          </div>
        </div>

        <div class="main" v-else-if="type == 'first'">
            <div v-for="(cur,index) in curList" :key="index">
              <div v-if="index == checkIndex" >
                 <div class="que-wrapper">
                 <div class="question-wrapper">
                <div class="question">{{cur.title}}</div>
              </div>
              <van-radio-group v-model="cur.result">
                <van-cell-group> 
                    <van-cell clickable  center>
                        <template #title>
                            <span class="custom-title">A</span>
                            <span class="custom-title-body">{{cur.a}}</span>
                        </template>
                        <template #right-icon>
                            <van-radio name="A" icon-size="18px"/>
                        </template>
                    </van-cell>
                    <van-cell center clickable >
                        <template #title>
                            <span class="custom-title">B</span>
                            <span class="custom-title-body">{{cur.b}}</span>
                        </template>
                        <template #right-icon>
                            <van-radio name="B" icon-size="18px"/>
                        </template>
                    </van-cell>
                    <van-cell center clickable>
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
              </div>
              </div>
            </div>

            <div class="main-button">
              <van-button type="primary" block color="#5f7ef5" @click="addNum">{{addStr}}</van-button>
            </div>
        </div>

        <div class="main" v-else-if="type == 'result'">
                <div class="title">
                    <span>测你的左右脑</span>
                </div>
                <div class="main-img">
                    <img src="../../assets/test/QQ20220326-4.png" alt="">
                </div>
                <div class="main-text-result">
                    <p>测试结果:{{resultQUE.title}}</p>
                    <div class="result-text">{{resultQUE.result}}</div>
                </div>

                <div class="main-button">
                  <van-button type="primary" block color="#5f7ef5" @click="handleDoc">去咨询</van-button>
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
import { getTestDetail ,getMaxResult} from '../../services/home'

export default {
  components: {
    
  },
  data() {
    return {
      type:"start",
      curList:[],
      checkIndex:0,
      radio:'',
      addStr:'下一题'
    }
  },

  created() {
    this.requestList();
  },

  methods:{
    handleTest() {
      this.type = 'first';
    },

    async requestList() {
      const res = await getTestDetail();
      let result = res.data;
      let list = [];
      for(let item of result) {
        list.push({
          title:item.title,
          a:item.a,
          b:item.b,
          c:item.c,
          result:"",
             
        })
      }
      this.curList = list;
      console.log('拿到的题数量',this.curList)
     
    },

    addNum() {
      this.checkIndex++;
      console.log('this.checkIndex',this.checkIndex)
      if(this.checkIndex == 14) {
        this.addStr = '提交'
       
      }
      if(this.checkIndex == 15) {
        this.submitQue();
      }
    },

    async submitQue() {
      const res = await getMaxResult(this.curList);
      console.log('提交后的结果',res)
      if(res && res.resultCode == 200) {
        this.type = 'result';
        this.resultQUE = res.data;
      }
    },

    handleDoc() {
      this.$router.push('/teacher')
    },




  }

}
</script>