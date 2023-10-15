import { useState } from "react";
import { useForm } from "../../hooks";
import { CheckboxWords, RadioQuestions } from "./QuestionnaireData";



export function useQuestionnaire(/*initValues*/) {

  const {
    values, 
    name, 
    surname, 
    patronymic, 
    birthday,
    bio,
  } = useForm({
    name: '', 
    surname: '', 
    patronymic: '', 
    birthday: '',
    bio: '',
  });
  const [tagInput, setTagInput] = useState([]);
  const [checkBox, setCheckBoxLocal] = useState([]);
  const setCheckBox = el => {
    if (checkBox.includes(el)) {
      setCheckBoxLocal(checkBox.filter(v => v !== el));
    } else {
      setCheckBoxLocal([...checkBox, el]);
    }
  }
  const [radio, setRadioLocal] = useState(RadioQuestions.map(() => -1));
  const setRadio = (i, text) => 
    setRadioLocal(radio.map((v, idx) => i === idx ? text : v));
  const [image, setImage] = useState(null);
  const [sex, setSex] = useState('');
  const [isCompeted, setIsCompeted] = useState(false);

  const dto = {
    ...values,
    image,
    tags: [...tagInput, ...checkBox],
    answers: radio.filter((v, i) => i !== 8),
    sex,
    isSick: radio[8] === 'Да.'
  };

  return {
    dto,
    values,
    name, 
    surname, 
    patronymic, 
    birthday,
    bio,
    isCompeted,
    setIsCompeted,
    tagInput,
    setTagInput,
    checkBox,
    setCheckBox,
    radio,
    setRadio,
    image,
    setImage,
    sex, 
    setSex,
  }

}