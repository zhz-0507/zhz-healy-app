<template>
  <div class="home-index">
    <!-- 搜索 -->
    <van-search  placeholder="搜索"/>

    <!-- 轮播图 -->
    <Swiper></Swiper>

    <div class="new-news">
      <div class="icon-c"></div>
      <div class="txt">最新推荐</div>
    </div>

    <!-- 列表页 -->
    <List></List>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>
import Swiper from "../../components/swiper/index"
import List from "./list.vue"
export default {
  components: {
   Swiper,
   List
  },
  data() {
    return {
      active: 0,
      searchValue:"",
    }
  },

  mounted() {
    console.log('1111父组件')
  },
  


  methods:{
    
  }
  

  


}
</script>