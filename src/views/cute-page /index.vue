<template>
  <div class="cute-index">
    <van-nav-bar title="心灵治愈"></van-nav-bar>
      <van-tabs v-model="active" color='#5f7df5'>
        <!-- <van-tab title="情绪管理">
          <div class="item-list">
            <div class="item">
              <div class="wrapper"><img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/27.png" alt=""></div>
              <div class="wenzi">
                <p class="title">清楚负面情绪</p>
                <span class="text">适用:感觉身体沉重、情绪不振、萎靡、焦虑、暴躁、压抑者均可练习。</span>
              </div>
            </div>  
          </div>
        </van-tab> -->
        <div v-for="(item,index) in loaclData" :key="index">
          <van-tab :title="item.title">
            <div class="item-list" v-for="(info ,index) in item.arr" :key="index">
              <div class="item">
                <div class="wrapper"><img :src="info.image" alt=""></div>
                <div class="wenzi">
                  <p class="title">{{info.titleBanner}}</p>
                  <span class="text">{{info.text}}</span>
                </div>
              </div>
            </div>
          </van-tab>
        </div>
            
        </van-tabs> 
      
      
      
   
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
      active:0,

      loaclData:[
        {
          title:'情绪管理',
          arr:[
            {
              titleBanner:'清楚负面情绪',
              text:'适用:感觉身体沉重、情绪不振、萎靡、焦虑、暴躁、压抑者均可练习。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/27.png"
            },
            {
              titleBanner:'静心自生引导',
              text:'适用:心情烦躁、焦虑、压力人群，需要快速静心、调节情绪状态时进行，不适合开车或高空作业时进行。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/28.png"
            },  
            {
              titleBanner:'情景想象减压',
              text:'适用:每日一次释放压力，或日常感觉疲劳以及负面情绪时练习，开车或高空作业请勿练习。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/29.png"
            },  
            {
              titleBanner:'交替放松法 - 去除焦虑',
              text:'适用:适合自我感觉被同学孤立的学生人群、希望改善人际关系的学生人群。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/31.png"
            },           
          ]
        },
        {
          title:'疲劳放松',
          arr:[
            {
              titleBanner:'深度放松引导',
              text:'适用:适合处理挑战性情景，以及愤怒、焦虑、低落等情绪，适于所有需要快速调节情绪的场景和人群。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/84.png"
            },
            {
              titleBanner:'深度振奋引导',
              text:'适用:每日晨起或需要能量时进行，适用于所有人群，尤其是需要精力充沛的人群。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/81.png"
            },  
            {
              titleBanner:'恢复精力放松法',
              text:'适用:每日一次释放压力，或日常感觉疲劳以及负面情绪时练习，开车或高空作业请勿练习。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/82.png"
            },  
            {
              titleBanner:'日常护眼放松',
              text:'适用:每日一次进行眼部保养或感觉眼睛疲劳时练习，不要在开车或从事高空作业进行。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/83.png"
            },           
          ]
        },
        {
          title:'学习备考',
          arr:[
            {
              titleBanner:'记忆宫殿激活',
              text:'适用:想要发挥大脑潜能的人群，帮助你唤醒记忆潜能，同时可以帮助增强信心和记忆力。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/93.png"
            },
            {
              titleBanner:'缓解考试焦虑',
              text:'适用:考试焦虑人群，考前一个月，每周进行1-2次的练习，或者对考试焦虑时进行。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/94.png"
            },  
            {
              titleBanner:'日常脑力激活',
              text:'适用:缺乏活力，容易疲惫的人群，帮助激活脑力，促进新陈代谢，排除体内积压废物。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/95.png"
            },  
            {
              titleBanner:'考前脑力激活',
              text:'适用:平常健脑益智，考前用于心态调节，解决各种突发性心理障碍，如怯场、手抖等。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/96.png"
            },           
          ]
        },
        {
          title:'睡眠改善',
          arr:[
            {
              titleBanner:'深度睡眠引导',
              text:'适用:轻松入睡困难人群以及压力人群，帮助放松躯体和内脏，缓解压力情绪，提高睡眠质量。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/86.png"
            },
            {
              titleBanner:'长期压力型失眠专用',
              text:'适用:缓解长期累积的身心压力，长期压力人群、睡眠困难人群和需要提高睡眠质量的人群。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/87.png"
            },  
            {
              titleBanner:'午间睡眠放松',
              text:'适用:帮助在午间快速进入安稳的睡眠状态，更快放松大脑和身体。适合午休睡眠前进行。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/88.png"
            },  
            {
              titleBanner:'助眠冥想 – 意念转圈法',
              text:'适用:睡前进行，帮助最短时间放松全身，尤其适合于应激式焦虑导致的失眠，如考试、面试等。',
              image:"https://gitee.com/vscodevue/drawingbed/raw/master/img/89.png"
            }, 
          ]
        },
        
        
      ]
    }
  },
  mounted() {
  


  },
  methods:{
    

  }

}
</script>