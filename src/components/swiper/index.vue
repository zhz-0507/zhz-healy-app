<template>
  <div class="wrapper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="200px">
      <van-swipe-item >
        <img src="../../assets/banner/04.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/banner/04.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/banner/04.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/banner/04.png" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="less">
@import './index.less';
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>

<script>
export default {
  components: {
   
  },
  data() {
    return {
      images: [
        '../../assets/banner/04.png',
        '../../assets/banner/04.png',
        '../../assets/banner/04.png',
        '../../assets/banner/04.png',
      ],
    }
  },

  methods:{
    onChange(index) {
      console.log('index',index)
    },
  }


}
</script>