<template>
  <div class="list-h5">
    <div class="list-wrapper-all">
      <div class="list-wrapper-single" v-for="(item ,index) in list" :key="index">
        <div class="single-inner">
          <img :src="item.imgUrl"  alt="">
          <div class="inner-txt">
            <div class="txt-title">测试时是实话实说实话实说</div>
            <div class="txt-info">
              <div class="txt-img">
                <img :src="item.imgUrl" alt="">
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
  </div>
</template>

<style lang="less">
@import './list.less';
</style>

<script>
// import Swiper from "../../components/swiper/index"

import { formatImg  } from '../../common/filters/index'
export default {
  components: {
  //  Swiper
  },
  data() {
    return {
      active: 0,
      
      list:[
        {
          imgUrl:"https://si.daily.geilicdn.com/daily_h5user1122996414-43360000017b29902aa80a2501a4_225_225.jpg?w=400&h=400&cp=1",
          nickName:"嗜好"
        },
        {
          imgUrl:"https://si.daily.geilicdn.com/daily_h5user1122996414-43360000017b29902aa80a2501a4_225_225.jpg?w=400&h=400&cp=1",
          nickName:"嗜好"
        },
        {
          imgUrl:"https://si.daily.geilicdn.com/daily_h5user1122996414-43360000017b29902aa80a2501a4_225_225.jpg?w=400&h=400&cp=1",
          nickName:"嗜好"
        },
        {
          imgUrl:"https://si.daily.geilicdn.com/daily_h5user1122996414-43360000017b29902aa80a2501a4_225_225.jpg?w=400&h=400&cp=1",
          nickName:"嗜好"
        },
        {
          imgUrl:"https://si.daily.geilicdn.com/daily_h5user1122996414-43360000017b29902aa80a2501a4_225_225.jpg?w=400&h=400&cp=1",
          nickName:"嗜好"
        },
        {
          imgUrl:"https://si.daily.geilicdn.com/daily_h5user1122996414-43360000017b29902aa80a2501a4_225_225.jpg?w=400&h=400&cp=1",
          nickName:"嗜好"
        },
      ]
    }
  },

  methods:{
    
  }
  

  


}
</script>