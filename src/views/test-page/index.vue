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
              <van-radio-group v-model="cur.ischecked">
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
              <van-button type="primary" block color="#5f7ef5" @click="addNum">下一题</van-button>
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
      curList:[
        {
          "title": "1、戴了很久的饰品突然断掉，你的想法是？",
          "qid": "3",
          "a": "有不好的事情要发生",
          "b": "意外而已",
          "c": "好可惜",
          "ischecked":""
        },
        {
            "title": "2、一座7层楼的房子，现在只剩下1、2、7层可以挑选，你选哪一层住？",
            "qid": "3",
            "a": "第一层",
            "b": "第二层",
            "c": "第七层"
        },
        {
            "title": "3、给你一辆高级跑车，你现在最想开去哪兜风？",
            "qid": "3",
            "a": "熟人多的地方",
            "b": "郊外公路",
            "c": "随便，无所谓"
        },
        {
            "title": "4、你最讨厌在以下哪种天气出门？",
            "qid": "3",
            "a": "下细雨",
            "b": "刮大风",
            "c": "大太阳"
        },
        {
            "title": "5、谈恋爱的时候，你愿意奢侈一点吗？",
            "qid": "3",
            "a": "是的",
            "b": "不是",
            "c": "不确定"
        },
        {
            "title": "6、路上看到可爱的小狗，你会忍不住想逗逗吗？",
            "qid": "3",
            "a": "是的",
            "b": "不是",
            "c": "不确定"
        },
        {
            "title": "7、你很好奇其它国家的文化吗？",
            "qid": "3",
            "a": "是的",
            "b": "不是",
            "c": "不确定"
        },
        {
            "title": "8、和别人讨论话题出现意见不同的情况时，你会：",
            "qid": "3",
            "a": "坚持自己的意见",
            "b": "思考别人的意见",
            "c": "不一定会怎样"
        },
        {
            "title": "9、 激将法对你有效吗？",
            "qid": "3",
            "a": "是的",
            "b": "不是",
            "c": "不确定"
        }
      ],
      checkIndex:0,
      radio:'',
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
      const res = await getTestDetail(1,5);
      console.log('拿到的题数量',res)
     
    },

    addNum() {
      this.checkIndex ++;
      if(this.checkIndex >= this.curList.length) {
        this.checkIndex =this.curList.length-1;
      }
    }

  }

}
</script>