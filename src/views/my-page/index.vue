<template>
  <div class="mine-index">
    <div class="backg">
      <div class="shezhi" @click="handleSet">
          <img src="../../assets/user/3.png" alt="">
      </div>
      <div class="header">
        <van-uploader
          :after-read="afterRead"
          :preview-full-image="false"
          :deletable="false"
          :max-count="1"
          capture="camera"
        >
          <img  v-if="imageUrl" class="avatar" :src="imageUrl">
          <img  v-else class="avatar" src="../../assets/user/4.png">
          </van-uploader>
          <div class="name">
              <span>{{user.nickName}}</span>
          </div>
          <div class="introduceSign">
              <span>{{user.introduceSign}}</span>
          </div>
      </div>
      <div class="main">
        <div class="guanzhu">
          <img src="../../assets/user/1.png" alt="">
          <span class="count">10</span>
          <span class="text">我关注的</span>
        </div>  
        <div class="fensi">
          <img src="../../assets/user/2.png" alt="">
          <span class="count">100</span>
          <span class="text">关注我的</span>
        </div>
      </div>
      <div class="item-list">
        <div class="item">
          <span class="count">432</span>
          <span class="text">点赞</span>
        </div>
        <div class="item">
          <span class="count">50</span>
          <span class="text">评论</span>
        </div>
        <div class="item">
          <span class="count">40</span>
          <span class="text">转发</span>
        </div>
        <div class="item">
          <span class="count">58</span>
          <span class="text">私信</span>
        </div>
      </div>
      <div class="list">
        <div class="title">
          <div class="back"></div>
          <h2>更多</h2>   
        </div>
        <div class="list-item-wrapper">
          <div class="list-item" v-for="(item,index) in list" :key="index">
            <img :src="item.url" alt="">
            <span>{{item.title}}</span>
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
import { uploadUserImage,getUserImage ,getInfo} from '../../services/set.js'
import oneIcon from '../../assets/icon/QQ20220327-0.png'
import twoIcon from '../../assets/icon/QQ20220327-1.png'
import threeIcon from '../../assets/icon/QQ20220327-2.png'
import fourIcon from '../../assets/icon/QQ20220327-3.png'
import fiveIcon from '../../assets/icon/QQ20220327-4.png'
import sixIcon from '../../assets/icon/QQ20220327-5.png'
export default {
  components: {
    
  },
  data() {
    return {
      imageUrl: '',
      user:{},
      list:[
        {
          url:oneIcon,
          title:"我的课程",
        },
        {
          url:twoIcon,
          title:"客服中心",
        },
        {
          url:threeIcon,
          title:"创作中心",
        },
        {
          url:fourIcon,
          title:"安全中心",
        },
        {
          url:fiveIcon,
          title:"我的帖子",
        },
        {
          url:sixIcon,
          title:"实名认证",
        },
      ],  
    }
  },

  created() {
  
    this.getUserInfo();

    this.getImage();
  },

  methods:{
    handleSet() {
      this.$router.push(`/set`); 
    },
    async afterRead(file) {
      console.log(file)
      const fd = new FormData()
      fd.append('file', file.file)
      const res = await uploadUserImage(fd);
      if(res && res.resultCode == 200) {
        this.getImage();
      }else {
        this.$toast('头像上传或更改失败');
      }
    },

    async getImage() {
      const { data } = await getUserImage();
      this.imageUrl = data
    },

    async getUserInfo() {
      const { data }  = await getInfo();
      this.user = {
        nickName:data.nickName,
        introduceSign:data.introduceSign,
      }
      console.log('data',data)

    }

  }

}
</script>