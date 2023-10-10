import { API } from "../endpoints";
import { axiosInstance } from "../instance";



export const postLogin = data =>
  axiosInstance.post(API.LOGIN, data)
  .then(user => {
    window.localStorage.setItem('accessJwt', user.data.accessJwt);
    return user.data;
  }).catch(e => console.log(e));

export const postRegistration = data =>
  axiosInstance.post(API.REGISTRATION, data)
  .then(user => {
    return user.data;
  }).catch(e => console.log(e));

export const getMe = () =>
  axiosInstance.get(API.USER_ME).then(data => data.data);