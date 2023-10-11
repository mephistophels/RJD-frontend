import {axiosInstance} from "../instance";


export const postLogin = data =>
    axiosInstance.post('/public/login', data)
        .then(user => {
            window.localStorage.setItem('accessJwt', user.data.accessJwt);
            return user.data;
        })

export const postRegistration = data =>
    axiosInstance.post('/public/registration', data).then(user => {return user.data;})
