<template>
  <div class="list-h5">
    <!-- 最新推荐 -->
    <div class="good" :style="{ paddingBottom: '100px'}">
        <!-- <header class="good-header">最新推荐</header> -->
        <div class="good-box">
          <div class="good-item" v-for="(item,index) in list" :key="index">
            <img :src="(item.url)" class="item-img" @click="handleItem(item)">
            <div class="inner-txt"> 
              <div class="txt-title">{{item.content}}</div>
            </div>
            <div class="bottom-indo">
              <div class="left">
                <img :src="item.path">
                <span>{{item.nickName}}</span>
              </div>
              
              <div class="right" @click="handleGood(item)">
                <span>{{item.totalLikeCount}}</span>
                <i class="good-icon-like" v-if="item.flag"></i>
                <i class="good-icon-unlike" v-else></i>
              </div>
            </div>
          </div>
        </div>
    </div>

    <!-- <ScrollLoad ref="scrollLoader" :onLoad="requestListData"></ScrollLoad> -->

    
  </div>
</template>

<style lang="less">
@import './list.less';
</style>

<script>
//api
import {getHomeDetail,getGood} from '.././/../services/home'
//components
import ScrollLoad from '../../common/scroll-load/index.vue'
export default {
  components: {
    ScrollLoad
  },
  data() {
    return {
      active: 0,
      
      list:[],
      pageNum: 0,
      pageSize: 50,
      totalCount:0,  

      goodNum:'',

      ischeck:false,
    }
  },

  created() {
    console.log('222字组件')
    this.initData();
  },

  

  methods:{
    // async requestListData() {
    //   this.initData();
    // },

    async initData() {
      // this.$refs.scrollLoader.load();
      const res = await getHomeDetail(this.pageNum,this.pageSize)
      console.log('111',res)
      if(res && res.resultCode == 200) {
        this.list = res.data.lists;

      // }else {
      //   this.$refs.scrollLoader.noMoreLoad();
      }
    },

    // 去详情
    handleItem(item) {
      console.log(item)

      // return
      this.$router.push(`/Detail/${item.id}`); 
    },

    
    // 点赞
    async handleGood(item) {
     
      console.log(item);
      const {data} = await getGood(item.id);
      console.log('点赞的res',data)
      if(data == 1) {
        this.ischeck = true;
        this.$toast('点赞+1');
      }else {
        this.ischeck = false;
        this.$toast('取消点赞');
      }

      this.initData()

    }
  }
  

  


}
</script>