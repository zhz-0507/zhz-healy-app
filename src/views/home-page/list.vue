<template>
  <div class="list-h5">
    <!-- 最新推荐 -->
    <div class="good" :style="{ paddingBottom: '100px'}">
        <header class="good-header">最新推荐</header>
        <div class="good-box">
          <div class="good-item" v-for="(item,index) in list" :key="index" @click="handleItem(item)">
            <img :src="(item.url)" class="item-img">
            <div class="inner-txt">
              <div class="txt-title">{{item.content}}</div>
              <div class="txt-info">
                <div class="txt-img">
                  <img :src="item.path" alt="">
                  <span>{{item.nickName}}</span>
                </div>
                <div class="icon-txt">
                  <van-icon name="like-o" /><span>99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <ScrollLoad ref="scrollLoader" :onLoad="requestListData"></ScrollLoad>

    
  </div>
</template>

<style lang="less">
@import './list.less';
</style>

<script>
//api
import {getHomeDetail} from '.././/../services/home'
//components
import ScrollLoad from '../../common/scroll-load/index.vue'
import { formatImg  } from '../../common/filters/index'
export default {
  components: {
    ScrollLoad
  },
  data() {
    return {
      active: 0,
      
      list:[],
      pageNum: 0,
      pageSize: 10,
      totalCount:0,  
    }
  },

  created() {
    // this.initData();
  },

  methods:{

    async requestListData() {
      this.initData();
    },

    async initData() {
      this.$refs.scrollLoader.load();
      const res = await getHomeDetail(this.pageNum,this.pageSize)
      console.log('111',res)
      if(res && res.resultCode == 200) {
        this.list = res.data.lists;

      }else {
        this.$refs.scrollLoader.noMoreLoad();
      }
    },

    handleItem(item) {
      console.log(item)
    }
  }
  

  


}
</script>