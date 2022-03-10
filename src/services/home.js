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

// 首页动态
export function getHomeDetail(pageNum,pageSize) {
  return axios.get(`/showDongTai?pageNo=${pageNum}&pageSize=${pageSize}`);
}









