import axios from "./axios/index";

export function getMessageCode(param) {
  return axios.get(`/user/send/${param}`);
}

export function postRegister(params) {
  return axios.post(`/user/register/`,params);
}

export function postLogin(params) {
  return axios.post(`/user/login/`,params);
}

export function validateCode(params) {
  return axios.post(`/user/validateCode/`,params);
}

export function updatePassword(params) {
  return axios.post(`/user/updatePassword/`,params);
}

export function logout() {
  return axios.post(`/user/logout/`);
}







