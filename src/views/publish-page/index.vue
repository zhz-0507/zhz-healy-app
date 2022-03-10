<template>
  <div class="publish-index">
    <van-nav-bar title="动态发布">
      <template #left>
        <van-icon name="arrow-left" color="#2a2a2a" size="25"  @click="onClickLeft()"/>
      </template>
    </van-nav-bar>
    <div class="wrapper">
      <div class="main">
          <van-field
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="想说点什么..."
          />
          <van-uploader
            v-model="fileList"
            :after-read="afterRead"
            capture="camera"
            multiple
            :max-count="6"
            class="upload"
          >
          <template #preview-cover="{ file }">
              <div class="preview-cover van-ellipsis">{{ file.name }}</div>
          </template>
          <img  class="upload" src="https://gitee.com/vscodevue/drawingbed/raw/master/img/35.png">
          </van-uploader>
          <div class="end">
            <div class="wrapper-iconfont">
              <span class="iconfont iconposition-copy" @click="getPosition"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="button">
          <van-button type="primary" block color="#5f7ef5" @click="handlePublish">发布</van-button>
      </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>
import {uploadImage,uploadDongTai} from '../../services/home'
export default {
  components: {
   
  },
  data() {
    return {
      message:'',
      uploadImages:[],
      fileList:[],
    }
  },

  mounted() {
    
  },

  methods:{
    async onClickLeft(){
      this.$router.go(-1)
    },
    async handlePublish(){
      const res = await uploadDongTai({
        'content':this.message
      })
      if(res && res.resultCode == 200) {
        this.$toast('发布成功');
        this.$router.push({ path: 'home' })
      }
      
     
    },
    async afterRead(file){
      const fd = new FormData()  
      fd.append('file', file.file)
      const { data } = await uploadImage(fd);
      console.log(data)
    },

    getPosition() {
      


    },

  }

}
</script>