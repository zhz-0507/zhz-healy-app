<template>
  <div class="backg">
    <van-nav-bar title="文章详情" :class="navBarFixed == true ? 'navBarWrap' :''">
      <template #left>
          <van-icon name="arrow-left" color="#2a2a2a" size="25"  @click="onClickLeft()"/>
      </template>
    </van-nav-bar>

    <div class="header">
        <img :src="img" alt="">
    </div>
    <div class="wenzi">
        <div class="title">
            <p>{{title}}</p>
        </div>
        <div class="text">
            <p style="white-space: pre-wrap" v-html="text"></p>
        </div>
    </div>
  </div>
</template>


<style lang="less">
@import './text.less';
</style>

<script>

export default {
  data() {
    return {
      list:[
        {
          index:1,
          title:'带你认识焦虑症',
          img:"https://liangshuai1.oss-cn-beijing.aliyuncs.com/heal/123.jpg",
          text:'焦虑症（anxiety），又称为焦虑性神经症，是神经症这一大类疾病中最常见的一种，以焦虑情绪体验为主要特征。可分为慢性焦虑，即广泛性焦虑（generalized anxiety）和急性焦虑，即惊恐发作（panic attack）两种形式。主要表现为：无明确客观对象的紧张担心，坐立不安，还有植物神经功能失调症状，如心悸、手抖、出汗、尿频等，及运动性不安。注意区分正常的焦虑情绪，如焦虑严重程度与客观事实或处境明显不符，或持续时间过长，则可能为病理性的焦虑。主要根据病史、家族史、临床症状、病程及体格检查、量表测查和实验室辅助检查，由专科医生诊断。其中最主要的是临床症状和病程。早期筛查或自我诊断可以采用一些简单的焦虑自评量表（SAS）测评，如果分数较高，建议到精神科或心理科做进一步检查。焦虑症系神经症的一个亚型，首先须符合神经症的特点，即具有一定的人格基础，起病常受心理社会因素的影响；症状没有可证实的器质性病变作基础，与病员的现实处境不相称，但病员对存在的症状感到痛苦和无能为力，自知力完整，病程多迁延。'
        },
        {
          index:2,
          title:'如何摆脱焦虑',
          img:"https://liangshuai1.oss-cn-beijing.aliyuncs.com/heal/456.jpg",
          text:'核心提示: 面对如今生活压力，一大部分人会患上焦虑烦恼症，如果掌握正确的方法可以摆脱焦虑烦恼，摆脱方法有：自我放松、自我疏导、合理饮食、自我激励等，希望有焦虑症的朋友可以多了解下。另外平时可以多参加些户外活动、找朋友聊聊天，这些方法都可以摆脱焦虑烦恼。如今生活和工作压力越来越大，每天要面对各种各样繁琐的事情，长期精神处于紧绷状态，时间久了就容易患上焦虑症，有些人不知道怎么解决，有时候会产生一些消极的想法，如果不正确处理会给人带来负面影响，那么如何摆脱焦虑烦恼呢？今天给大家分享四招摆脱焦虑烦恼。一、自我放松：如果出现焦虑烦躁要学会自我放松，可以听听音乐、练练瑜伽等方法来帮助身心放松。切忌不能给自己太大思想压力。事实表明长期思想压力大的人很容易患上焦虑烦恼症。二、自我疏导：焦虑和烦恼一般在短期内可以自行恢复，如果症状不减轻，可以用自我疏导方法来自行调节，多发现周围新鲜的事情，事实表明新事物可以从心理上驱逐人的焦虑烦恼，让人轻松愉快生活。这个方法焦虑烦恼症的人可以试试，效果还是不错的。　三、饮食：焦虑的人应该多吃全谷类食物，及时补充维生素，如果焦虑烦恼出现疲惫不堪，可以多吃新鲜水果和蔬菜，比如：苹果、香蕉、藕片、另外要学会摆脱咖啡和茶提神的不良习惯。四、自我激励：自我激励就是可以通过想象各种可能发生的危险情况，在发生的危险情况中会慢慢想到无法体验到的焦虑，直到出现任何焦虑后反而不会害怕、担心了，那么焦虑和烦恼也就自行缓解了。'
        },
        {
          index:3,
          title:'家庭暴力',
          img:"https://liangshuai1.oss-cn-beijing.aliyuncs.com/heal/789.jpg",
          text:'1、严重影响、破坏了社会组成细胞——家庭。在一个家庭中，经常发生家庭暴力的，必然影响夫妻感情。当妻子无法受其丈夫的暴力时，以选择离婚、离家出走、甚至以暴抗暴等途径摆脱遭受的暴力，致使家庭破裂、毁灭。2、影响子女的正常生活和成长。经常发生家庭暴力的家庭，对孩子的身心健康有着严重的影响。特别是直接对孩子施暴时，更容易使孩子的情绪产生恐惧、焦虑、厌世的心理，轻者影响孩子的情绪，他们自卑、孤独，影响学习和生活，严重者使孩子们离家出走，荒废学业，甚至还走上犯罪的道路。3、家庭暴力侵害了妇女的人格尊严和身心健康，甚至威胁生命。在我们调查中，多数妇女都是在他们施暴时惨遭残害。暴力行为严重地侵犯了妇女的人身权利。4、家庭暴力给社会带来了不稳定因素。不及时有效遏止家庭暴力，受害者本人又不知用法律保护自己，在忍气吞声、长期遭受暴力的扭曲心态下，采取了法律禁止的手段——故意杀人，酿成恶性事件。给社会带来恶劣的后果，极大的危害了社会安定的局面。'
        },
        {
          index:4,
          title:'如何进行心理放松？',
          img:"https://liangshuai1.oss-cn-beijing.aliyuncs.com/heal/101112.jpg",
          text:'当自己身心疲惫 劳累不堪 焦虑不安 压力过大的时候 可以采取下面告诉大家的办法 进行训练，帮助自己消除压力  达到心身灵的放松。自我想象法。 找一个舒适的环境 房间比较大 不会让人有压抑的感觉就行，然后闭上眼睛，想着自己正在经历一些自己最想经历的事情，想一些自己经历过的美好的事情  一些美好的回忆 ，让自己开心幸福的事情。然后慢慢的想象自己到了海边，站在沙滩上，张开双臂，拥抱大海，心胸宽广，没有意思的烦恼。到这时候，就可以慢慢睁开眼睛了。刚开始的时候自己静不下醒来，多练习，就可以了。音乐放松法。找一段自己最喜欢的音乐倾听，好的音乐会让自己的身心和生理上都有很大的变化，可以促进自己血液的循环。让人肌肉放松，血压平稳达到心情宁静和轻松愉快。肌肉放松法。顾名思义，就是先紧张后放松。先把自己的肌肉绷紧，然后持续一段时间，让自己全身都是绷紧状态，坚持十秒钟，快坚持不下去的时候，再突然的全身都放松。通过放松的那一刻，达到自己的一种心情放松的途径。'
        }
      ],
      title:'健康',
      img:'',
      text:'',
      navBarFixed:false,
      
    }
  },

  created() {

    const index =  this.getParams();
    console.log('传过来的下标',index)
    this.list.map((item) => {
      if(item.index == index ) {
        console.log('一样')
        this.title = item.title;
        
        this.img = item.img;
        this.text = item.text
        console.log(this.img)
      }
      console.log(item);
    })
    
   

  },

  mounted() {
    window.addEventListener("scroll", this.hideMenu); //监听滚动事件
      this.text.replace(/\n/g, '<br>')
      
  },

  methods:{
    
    onClickLeft(){
      this.$router.go(-1)
    },

    // 解析url
    getParams(){
      //获取参数  
      let url =  window.location.href
    
      let params =  url.split('/');
      return params[params.length-1];
    },

    hideMenu() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //当滚动超过50时，实现吸顶效果（导航高度为50）
     
      if (scrollTop > 49) {
          this.navBarFixed = true
      }else{
          this.navBarFixed = false
      }
    },


  }


}
</script>