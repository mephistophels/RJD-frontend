import { useState } from "react";
import { useForm } from "../../hooks";
import { CheckboxWords, RadioQuestions } from "./QuestionnaireData";



export function useQuestionnaireBaby(/*initValues*/) {

  const {
    values, 
    name, 
    surname, 
    patronymic, 
    birthday,
  } = useForm({
    name: '', 
    surname: '', 
    patronymic: '', 
    birthday: '',
  });
  const [image, setImage] = useState(null);
  const [sex, setSex] = useState('');
  const [isCompeted, setIsCompeted] = useState(false);
  const [isSick, setIsSick] = useState(null);

  const clear = () => {
    setImage(null);
    setSex('');
    setIsCompeted(false);
    setIsSick(null);
    name.onChange('');
    surname.onChange('');
    patronymic.onChange('');
    birthday.onChange('');
  }

  const dto = {
    ...values,
    image,
    sex,
    isSick: isSick === 'Да.'
  };

  return {
    dto,
    values,
    name, 
    surname, 
    patronymic, 
    birthday,
    isCompeted,
    setIsCompeted,
    isSick,
    setIsSick,
    image,
    setImage,
    sex, 
    setSex,
    clear,
  }

}