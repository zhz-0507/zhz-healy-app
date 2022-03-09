<template>
  <div class="mine-index">
    <div class="backg">
      <div class="shezhi" @click="handleSet">
          <img src="../../assets/user/3.png" alt="">
      </div>
      <div class="header">
        <van-uploader
          :after-read="afterRead"
          :before-read="beforeRead"
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
      <!-- <div class="list">
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
      </div> -->
    </div>
    
      
      

  </div>
</template>
<style lang="less" scoped>
@import './index.less';
</style>

<script>

// import LoginCom from '@/components/login-com/index.vue'

export default {
  components: {
    // LoginCom,
  },
  data() {
    return {
      imageUrl: '',
      user:{},
      list:[],  
    }
  },
  methods:{
    handleSet() {
      this.$router.push(`/set`); 
    },


    afterRead() {

    },

    beforeRead() {

    }

  }

}
</script>