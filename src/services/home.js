import axios from "./axios/index";
//动态图片
export function uploadImage(params) {
  return axios.post('/uploadImage',params);
}
//动态文字
export function uploadDongTai(params) {
  return axios.post('/uploadDongTai',params);
}
export function add(params) {
  return axios.post('/add',params);
}

//回退删除
export function deleteImage(){
  return axios.get('/deleteImage')
}






