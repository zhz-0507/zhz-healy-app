<template>
  <div id="app">
      <transition :name="transitionName">
        <router-view class="router-view" />
      </transition>
      <Tabbar v-if="isShowTab"></Tabbar>
    
  </div>
</template>


<style lang="less">
.router-view{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff!important;
}
</style>

<script>
import Tabbar from './components/tabbar/index.vue'
export default {
  components: {
   Tabbar
  },
  data() {
    return {
      transitionName: 'slide-left',
      isShowTab:true,
      ShowMenuList: ['', '/home', '/test', '/cute', '/mine'], // 该变量为需要导航栏的数组
    }
  },

  watch: {
      $route(to, from) {
        // 底部导航出现在应有的路由中
        if(this.ShowMenuList.includes(to.path)){
          this.isShowTab = true
        }else{
          this.isShowTab = false
        }
        // 有主级到次级
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-left' // 向左滑动
        } else if (to.meta.index < from.meta.index) {
          // 由次级到主级
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = ''   //同级无过渡效果
        }
      }
    }
  

  


}
</script>



