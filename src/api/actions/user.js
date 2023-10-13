import { API } from "../../consts";
import { showAlert } from "../../utils";
import {axiosInstance} from "../instance";


export const getCompanionList = () =>
  axiosInstance.get(API.COMPANION_LIST)

export const postCreateCompanion = (data) =>
  axiosInstance.post(API.COMPANION_CREATE, data)