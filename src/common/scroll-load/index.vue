<template>
  <section class="scroll-wrapper" v-if="activation" ref="element">
    <section class="scroll-loading">
      <div v-show="isLoading && !disable">
        <i class="icon-loading"></i>
        <span>正在加载中...</span>
      </div>
      <div v-show="disable" class="scroll-bottom">到底了</div>
    </section>
  </section>
</template>

<style lang="less">
@import "./index";
</style>

<script type="text/javascript">
import scroll_load from "./index.js";

export default{
  data: function() {
    return {
      activation: true,
      scrollLoad: null,
      disable: false, // 加载是否结束 - 插件不可用状态
      isLoading: false // 是否正在加载
    };
  },
  props: {
    onLoad: {
      type: Function
    }
  },
  mounted: function() {
    this.activation && this.init();
  },

  destroyed: function() {
    this.activation = false;
    this.scrollLoad && this.scrollLoad.destroy();
  },

  methods: {
    init() {
      if (this.scrollLoad) return;

      this.scrollLoad = new scroll_load(this.$refs.element, {
        initialLoad: true,
        load: this.load
      });
    },

    isNeedLoadMore() {
      let res = document.body.scrollHeight < window.screen.availHeight + 200; // 200 插件滚动的阈值
      if (!this.activation || this.disable || this.isLoading) {
        res = false;
      }
      return res;
    },

    reload() {
      this.activation = true;
      this.disable = false; // 加载是否结束 - 插件不可用状态
      this.isLoading = false; // 是否正在加载
      this.load();
    },

    load() {
      if (this.isLoading || this.disable) {
        return false;
      }
      this.isLoading = true;
      this.onLoad && this.onLoad();
    },

    noMoreLoad() {
      this.disable = true;
    },

    loadOver() {
      this.isLoading = false;
    },

    hideLoader() {
      this.activation = false;
    }
  }
};
</script>
