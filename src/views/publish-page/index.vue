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
            placeholder="请输入留言"
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
                    <span class="iconfont iconat"></span>
                    <span class="iconfont iconposition-copy"></span>
                </div>
            </div>
        </div>
      </div>

      <div class="button">
          <van-button type="primary" block color="#5f7ef5" @click="handleEdit">发布</van-button>
      </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script>
export default {
  components: {
    // LoginCom,
  },
  data() {
    return {
      message:'',
      uploadImages:[],
      fileList:[],
    }
  },
  methods:{
    async onClickLeft(){
      // const {data} = await deleteImage()
      this.$router.go(-1)
    },
    async handleEdit(){
      const { data } = await uploadDongTai({
          'content':this.message
      })
      // this.$router.push({ path: 'square' })
    },
    async afterRead(file){
      console.log(file.length)
      const fd = new FormData()
      if(file.length){
          for(let i=0;i<file.length;i++){
              fd.append('file', file[i].file)
              console.log(file[i].file)
          }         
      }else{
          fd.append('file', file.file)
      }
      const { data } = await uploadImage(fd);
      console.log(data)
    }

  }

}
</script>