<template>
    <div class="backg">
        <van-nav-bar title="个人资料">
            <template #left>
                <van-icon name="arrow-left" color="#2a2a2a" size="25"  @click="onClickLeft()"/>
            </template>
        </van-nav-bar>
        <div class="input-item">
            <van-field v-model="nickName" label="昵称" />
            <van-field v-model="introduceSign" label="个人简介" />
            <van-field v-model="password" type='password' label="修改密码" />
        </div>
        <van-button class="save-btn" color="#5f7ef5" type="primary" @click="handeSave" block>保存</van-button>
    </div>
</template>

<script>
import { updateInfo ,getInfo} from '../../services/set'
export default {
    name:'means',
    data() {
        return {
            nickName: '',
            introduceSign: '',
            password: ''
        }
    },

    async created() {
        let res = await getInfo();
        this.nickName = res.data.nickName;
        this.introduceSign = res.data.introduceSign;
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },

        async handeSave() {
            let params =  this._getParams();
            const res = await updateInfo(params);
            if(res && res.resultCode == 200) {
                this.$toast('修改成功');
            }
        },

        _getParams() {
            let forData = {};

            forData.nickName = this.nickName;
            forData.introduceSign = this.introduceSign;
            forData.password = this.password;

            return forData
        }
        // async save() {
        // const params = {
        //     introduceSign: this.introduceSign,
        //     nickName: this.nickName,
        //     passwordMd5: this.$md5(this.password)
        // }
        // // const { data } = await EditUserInfo(params)
        // // Toast.success('保存成功')
        // },
    },
//     async mounted() {
//         const { data } = await getUserInfo()
//         this.nickName = data.nickName
//         this.introduceSign = data.introduceSign
//   },
}
</script>

<style lang="less">
    .backg{
    //     .input-item {
    //     margin-top: 20px;
    // }
        .save-btn {
            width: 80%;
            margin: 20px auto;
        }
    }

</style>

