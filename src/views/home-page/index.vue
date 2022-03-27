<template>
  <div class="home-index">
    <!-- 搜索 -->
    <van-search
      v-model="searchValue"
      shape="round"
      background="#6987EA"
      placeholder="请输入搜索关键词"
    />

    <!-- 轮播图 -->
    <Swiper></Swiper>

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