
### Demo说明

```
<template>
  <section class="coupon-selector" v-if="loaded">
    <section class="coupon-list">
      <section class="coupon-ele" v-for="(coupon, index) in couponList" :key="index">
        <component-coupon :info="coupon"></component-coupon>
      </section>
      <scroll-load ref="scrollLoader" :onLoad="onScrollLoad"></scroll-load>
    </section>
  </section>
</template>
<style lang="less">
@import "./main.less";
</style>

<script>
import ScrollLoad from "@/common/scrollLoad/index.vue";

export default {
  components: {
    ScrollLoad
  },
  data() {
    return {
      loaded: false, // 页面是否加载的tag
      couponList: []
    };
  },
  created() {
    this.$$loading.show();
  },
  methods: {
    // async initPage() {
    //   // 页面首屏加载逻辑

    //   console.log(res);
    //   if (res) {

    //   }

    //   // 加载完成
    //   this.$$loading.hide();
    //   this.loaded = true;
    // },
    async onScrollLoad() {
      let res = await getAvailableShopCouponList();
      this.$$loading.hide(); // 关闭loading - 页面首次进入的loading过度
      this.loaded = true;
      if (res && res.available_coupon_list && res.available_coupon_list.length > 0) {
          let _len = res.available_coupon_list.length;
          
          // 判断数据是否加载完毕
          if (_len < this.pagination.pageSize) {
            this.$refs.scrollLoader.noMoreLoad();
          }

          this.pagination.pageNum += 1;
          this.$refs.scrollLoader.loadOver();
          
          // 如果数据不能触发滚动，继续加载另一页
          this.$nextTick(() => {
            if (this.$refs.scrollLoader.isNeedLoadMore()) {
              this.$refs.scrollLoader.load();
            }
          });

      }else {
        this.$refs.scrollLoader.noMoreLoad();
      }
    }
  }
};
</script>
```
