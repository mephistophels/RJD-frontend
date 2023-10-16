import { API } from "../../consts";
import { showAlert } from "../../utils";
import {axiosInstance} from "../instance";


export const getCompanionList = () => (async() => [
  {
    questionnaire: {
      name: "wefuibwef",
      surname: "patronymic",
      patronymic: "kjwqbefwk",
      birthday: "10-12-2001",
      sex: "male",
      image: null,
    },
  },
  
])()
  // axiosInstance.get(API.COMPANION_LIST)

export const postCreateCompanion = (data) =>
  axiosInstance.post(API.COMPANION_CREATE, data)