<template>
  <div class="wrapper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="200px">  
      <van-swipe-item >
        <img src="../../assets/banner/QQ20220326-0.jpg" alt="" @click="onChange(1)">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/banner/QQ20220326-1.jpg" alt=""  @click="onChange(2)">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/banner/QQ20220326-2.png" alt=""  @click="onChange(3)">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/banner/QQ20220326-3.png" alt=""  @click="onChange(4)">
      </van-swipe-item>
    </van-swipe>
    <!-- <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" @click="goTo(index)">
      </van-swipe-item>
    </van-swipe> -->
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
// import imgOne from '../../assets/banner/QQ20220326-0.jpg';
// import imgTwo from '../../assets/banner/QQ20220326-1.jpg';
// import imgThree from '../../assets/banner/QQ20220326-2.jpg';
// import imgFour from '../../assets/banner/QQ20220326-3.jpg';
export default {
  components: {
  //  imgOne,imgTwo,imgThree,imgFour
  },
  data() {
    return {
      images: [
        // imgOne,
        // imgTwo,
        // imgThree,
        // imgFour,
        '../../assets/banner/QQ20220326-0.jpg',
        '../../assets/banner/QQ20220326-1.jpg',
        '../../assets/banner/QQ20220326-2.jpg',
        '../../assets/banner/QQ20220326-4.jpg',
      ],
      
    }
  },

  created() {
    console.log('--',this.images)
  },

  methods:{
    onChange(val) {
      console.log('---',val)
      this.$router.push({ path: `swipertext/${val}`})
      // this.$emit('jumpToDetail')
      // window.location.href = '/detail'
      
    },
  }


}
</script>