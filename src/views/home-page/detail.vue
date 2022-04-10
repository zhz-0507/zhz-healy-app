<template>

    <div class="backg" ref="getheight">
    <van-nav-bar title="推荐详情">
      <template #left>
          <van-icon name="arrow-left" color="#2a2a2a" size="25"  @click="onClickLeft()"/>
      </template>
    </van-nav-bar>
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        />
        <div class="header">
            <div class="hot">
                <div class="title">热门话题</div>
                <div class="text">
                    <div class="huati">
                        <van-icon name="fire" color="#f86262" size="18"/>
                        <span>#你最喜欢哪个心理学流派和方法？</span>
                    </div>
                    <span class="text-count">66人围观中</span>
                </div>
                <div class="text">
                    <div class="huati">
                        <van-icon name="fire" color="#f86262" size="18"/>
                        <span>#学习心理学的初心是什么？</span>
                    </div>
                    <span class="text-count">107人围观中</span>
                </div>
                <div class="text">
                    <div class="huati">
                        <van-icon name="fire" color="#f86262" size="18"/>
                        <span>#你习惯使用哪种防御机制？</span>
                    </div>
                    <span class="text-count">200人围观中</span>
                </div>
                <div class="jiewei" @click="goTo">查看更多话题</div>
            </div>
        </div>
        <div class="main" v-for="(item,index) in list" :key="index">
            <div class="bg"></div>
            <div class="start">
                <img :src="item.path" alt="">
                <div class="midle">
                    <span class="name">{{item.nickName}}</span>
                    <span class="jianjie">{{item.introduceSign}}</span>
                </div>
                <div class="shijian"><span>{{item.time}}</span></div>
            </div>
            <div class="xiangqing">
                <span  style="white-space: pre-wrap">{{item.content}}</span>
            </div>
            <div class="main-img">
                <img v-if="item.urlImg" :src="item.urlImg[0]" alt="" >
            </div>
            <div class="end">
                <div class="dianzan">
                    <span class="iconfont iconzan" :class="{ active: item.flag }" @click="handleGood(item.id)"></span>
                    <span class="text">{{item.totalLikeCount}}</span>
                    <span class="iconfont iconpinglun" @click="pinglun(item.id)"></span>
                    <span class="text">{{item.commentCount}}</span>
                </div>
                <div class="fenxiang">
                    <span class="iconfont iconreprint" @click="showShare = true"></span>
                    <span class="text">852</span>
                </div>
            </div>
            <div v-if="item.isActive" class="pinglun">
                <div v-for="(key,index) in item.commentVoList" :key="index" class="yiji">
                    <div class="first">
                        <img :src="key.user.path" alt="">
                    </div>
                    <div class="mingcheng">
                        <div class="one">
                            <span class="name">{{key.user.nickName}}</span>
                        </div>
                        <p class="content">{{key.comment.content}}</p>
                        <div class="two">
                            <span class="time">{{key.comment.time}}</span>
                            <span class="huifu" @click="reply(item.id,key.id)">回复</span>
                        </div>
                        <div class="three" v-for="(value,index) in key.replys" :key="index">
                            <img :src="value.user.path" alt=""> 
                            <span class="name">{{value.user.nickName}}</span>
                            <span class="content-two">{{value.reply.content}}</span>
                        </div>
                        <div class="erji" v-if="key.isActive">
                            <input type="text" v-model="text2" :placeholder="target+key.user.nickName" class="textar">
                            <van-button type="primary"  class="button" color="#5f7ef5" @click="erji(key.comment.id,key.comment.userId,item.id)">回复</van-button>
                        </div>
                    </div>
                </div>
                <div class="shuohua">
                    <input type="text" v-model="text1" placeholder="发表一条友善的评论" class="textar">
                    <van-button type="primary"  class="button" color="#5f7ef5" @click="huifu(item.id)">评论</van-button>
                </div>
            </div>
        </div>
        <div class="bg"></div>
        <div class="zhanwei"></div>
        
        <!-- 二维码弹层 -->
        <van-popup v-model="showPopup">
            <img class="qrcode" src="../../assets/qrcode.jpeg" alt="">
        </van-popup>
    </div>
</template>

<script>
import {getHomeDetail,getGood} from '../../services/home'
export default {
    name:'square',
    data() {
        return {
            value:'',
            list:[],
            lastList:[],
            isImg:true,
            showShare: false,
            text1:'',
            text2:'',
            target:"回复@",
            showPopup:false,
            options: [
                [
                    { name: '微信', icon: 'wechat' },
                    { name: '朋友圈', icon: 'wechat-moments' },
                    { name: 'QQ', icon: 'qq' },
                ],
                [
                    { name: '复制链接', icon: 'link' },
                    { name: '二维码', icon: 'qrcode' },
        
                ],
            ],
        }
    },
     mounted() {
        this.initData()
    },
    methods: {
        async initData() {
            const res = await getHomeDetail(1,50)
            console.log('111',res)
            if(res && res.resultCode == 200) {
                this.list = res.data.lists;
            }
        },

        onClickLeft(){
            this.$router.go(-1)
        },


        onSelect(item) {
            console.log(item)
            if(item.name === "二维码") {
                console.log('弹出二维码')
                this.showPopup = true;
            }
            if(item.name === "复制链接") {
               this.$toast('复制成功');
            }
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

        },


        reply(id,commentVoListId){
            console.log(id)
            let activeItem = this.list.find(item => item.id === id)
            let activeKey =  activeItem.commentVoList.find(item => item.id === commentVoListId)
            console.log(activeKey)
            activeKey.isActive = !activeKey.isActive
        },
        async dianzan(id){
            console.log(id)
            const { data } = await addLike({
                'id':id
            })
            await this.getDongtai()
            console.log(data)
        },
        async getDongtai(){
            const { data } = await showDongTai()
            this.list = data.dongTais
            console.log(this.list)
        },
        goTo(){
            this.$router.push('/topic')
        },
        pinglun(id){
            let activeItem = this.list.find(item => item.id === id)
            activeItem.isActive = !activeItem.isActive
        },
        async huifu(id){
            const { data } = await add({
                "entityType":1,
                "content":this.text1,
                "entityId":id
            })
            await this.getDongtai()
            this.pinglun(id)
            this.text1 = ""
            Toast.success('评论成功')
        },
        async erji(id,targetId,wenzhangId){
            const { data } = await add({
                "entityType":2,
                "content":this.text2,
                "entityId":id,
                "targetId":targetId
            })
            await this.getDongtai()
            this.pinglun(wenzhangId)
            this.text2 = ""
            Toast.success('回复成功')
        }
    },
}
</script>

<style lang="less" scoped>
    @import './detail.less';
</style>