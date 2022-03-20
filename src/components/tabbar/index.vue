<template>
  <div class="nav-bar">
    <ul class="nav-list">
        <router-link to="home" tag="li" class="nav-list-item active">
            <span class="iconfont iconshouye span-icon"></span>
            <span class="span-title">首页</span>
        </router-link>
        <router-link to="test" tag="li" class="nav-list-item" >
            <span class="iconfont iconguangchang span-icon"></span>
            <span class="span-title">测试</span>
        </router-link>
        <router-link to="publish" tag="li" class="nav-list-item" @click="JumpCute">
          <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/7e8b375f922849c1bff6755345ab55e.png" alt="" @click="JumpPublish">
        </router-link>
        <router-link to="cute" tag="li" class="nav-list-item" >
            <span class="iconfont iconicon span-icon"></span>
            <span class="span-title">治愈</span>
        </router-link>
        <router-link to="mine" tag="li" class="nav-list-item">
            <span class="iconfont iconwo1 span-icon"></span>
            <span class="span-title">我的</span>
        </router-link>
    </ul>
  </div>
</template>

<style lang="less">
@import './index.less';
@import '../../common/style/mixin.less';
</style>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      active: 0,
    }
  },

  methods:{
    JumpPublish() {
      window.location.href = '/publish'
    },
    JumpCute() {
      console.log('---')
      window.location.href = '/cute'
    }
  }
  

  


}
</script>