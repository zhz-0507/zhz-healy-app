<template>
    <div class="backg">
        <div class="title">
            <div class="left">下午好</div>
            <span class="bottom">下午茶可以帮助我们保持精力，放松身心</span>
        </div>
        <div class="back-img">
            <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/sleep.png" alt="">
        </div>
        <div class="main">
            <div class="main-title">小憩</div>
            <div class="item-list">
                <div class="item" @click="goRouter('customize')">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/36.png" alt="">
                    <div class="item-text">自定义小憩</div>
                    <span>15分钟</span>
                </div>
                <div class="item" @click="goRouter('nap')">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/37.png" alt="">
                    <div class="item-text">科学小盹</div>
                    <span>10分钟</span>
                </div>
                <div class="item" @click="goRouter('noonBreak')">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/38.png" alt="">
                    <div class="item-text">高效午休</div>
                    <span>24分钟</span>
                </div>
                <div class="item" @click="goRouter('expense')">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/39.png" alt="">
                    <div class="item-text">差旅模式</div>
                    <span>40分钟</span>
                </div>
                <div class="item" @click="goRouter('complete')">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/40.png" alt="">
                    <div class="item-text">完整午休</div>
                    <span>60分钟</span>
                </div>
                <div class="item item-last"></div>
            </div>
        </div>
        <div class="last">
            <div class="last-title">发现</div>
            <div class="last-list">
                <div class="last-list-item" @click="goTo">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/41.png" alt="">
                    <span>每日梦境</span>
                </div>
                <div class="last-list-item">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/98.png" alt="">
                    <span>舒眠引导</span>
                </div>
                <div class="last-list-item">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/99.png" alt="">
                    <span>晚安电台</span>
                </div>
                <div class="last-list-item">
                    <img src="https://gitee.com/vscodevue/drawingbed/raw/master/img/100.png" alt="">
                    <span>睡前故事</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"sleep",
    data() {
        return {
        }
    },
    methods: {
        goTo(){
            this.$router.push('/dream')
        },
        goRouter(v){
            this.$router.push(`/${v}`)
        }
    },
}
</script>

<style lang="less" scoped>
   @import './sleep.less';
</style>