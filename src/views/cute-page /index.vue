<template>
  <div class="cute-index">
    测试页面
    <div>
      <div id="map" style="width:1200px;height:500px;"></div>
    </div>
      
      
      
   
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>

// import LoginCom from '@/components/login-com/index.vue'

export default {
  components: {
   
  },
  data() {
    return {
        LocationCity:"正在定位"    //给渲染层定义一个初始值

    }
  },
  mounted() {
   this.city()    //触发获取城市方法


  },
  methods:{
    city(){    //定义获取城市方法
         const geolocation = new BMap.Geolocation();
         var _this = this
         geolocation.getCurrentPosition(function getinfo(position){
             let city = position.address.city;             //获取城市信息
             let province = position.address.province;    //获取省份信息
             _this.LocationCity = city
         }, function(e) {
             _this.LocationCity = "定位失败"
         }, {provider: 'baidu'});		
     }

  }

}
</script>