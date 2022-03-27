import axios from "./axios/index";

//上传更改个人头像接口
export function uploadUserImage(params) {
  return axios.put('/user/updatePersonHead',params);
}

//上传更改个人头像接口
export function getUserImage() {
  return axios.get('/user/getUpload');
}

//上传更改个人头像接口
export function updateInfo(params) {
  return axios.post('/user/updateInfo',params);
}

export function getInfo() {
  return axios.get('/user/info');
}


