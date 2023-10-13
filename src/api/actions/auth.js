import { API } from "../../consts";
import { showAlert } from "../../utils";
import {axiosInstance} from "../instance";


export const postLogin = (data, navigateTo) =>
    axiosInstance.post(API.LOGIN, data)
        .then(user => {
            window.localStorage.setItem('accessJwt', user.data.accessJwt);
            return user.data;
        })
        .then(() => navigateTo())
        .catch(e => showAlert(e.response?.data?.message));

export const postRegistration = (data, navigateTo) =>
    axiosInstance.post(API.REGISTRATION, data)
    .then(() => postLogin(data, navigateTo))
    .catch(e => showAlert(e.response?.data?.message));