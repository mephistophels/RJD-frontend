import {API} from "../../consts";
import {showAlert} from "../../utils";
import {axiosInstance} from "../instance";

const users = [
    {
        questionnaire: {
            sex: "male",
            name: "Сергей",
            surname: "Петров",
            patronymic: "Александрович",
            birthday: "1988-11-23",
            bio: "Я страстный любитель горных лыж и походов.",
            tags: [
                "сноубординг",
                "алгоритмы",
                "филология"
            ],
            answers: [
                "Я всегда готов к новым приключениям и встречам.",
                "Это часть жизни, с которой я справляюсь.",
                "Я в восторге от этого.",
                "Физическая активность.",
                "У меня обычно поздний подъем.",
                "Активно.",
                "Яркая.",
                "Я предпочитаю предложить конкретную помощь или действие."
            ],
            isSick: false
        },
        email: "petrov@example.com"
    },
    {
        questionnaire: {
            sex: "female",
            name: "Анастасия",
            surname: "Смирнова",
            patronymic: "Владимировна",
            birthday: "1992-07-30",
            bio: "Обожаю книги, йогу и путешествия по экзотическим странам.",
            tags: [
                "Мультипликация",
                "Опера",
            ],
            answers: [
                "Я ценю глубокие разговоры и искренние отношения.",
                "Я стараюсь не думать об этом.",
                "Это может быть интересным опытом.",
                "Тихие увлечения.",
                "Я - ранняя пташка.",
                "Спокойно.",
                "Уютная теплота.",
                "Я предпочитаю быть рядом и оказывать моральную поддержку."
            ],
            isSick: false
        },
        email: "smirnova@example.com"
    },
    {
        questionnaire: {
            sex: "male",
            name: "Дмитрий",
            surname: "Васильев",
            patronymic: "Михайлович",
            birthday: "1985-03-17",
            bio: "Люблю музыку, играть на гитаре и проводить время на природе.",
            tags: [
                "рукописи",
                "шашки",
                "самбо"
            ],
            answers: [
                "Я открыт для дружбы и искренних встреч.",
                "Я стараюсь принимать вещи такими, какие они есть.",
                "Я бы хотел это попробовать.",
                "Творческие активности.",
                "Мой режим сна меняется в зависимости от вдохновения.",
                "С энтузиазмом.",
                "Теплая неоновая.",
                "Я рядом, чтобы слушать и поддерживать."
            ],
            isSick: false
        },
        email: "vasiliev@example.com"
    }
]
const train = {
    carriages: Array(8).fill().map((_, i) => ({
        places: Array(36).fill().map((_, j) => ({
                rating: Math.random(),
                user: Math.round(Math.random()) ? users[Math.round(Math.random() * 2)] : null,
            }
        ))
    }))
}

export const getCarriage = (data) =>
    (async () => train.carriages[data.carriage - 1])()

export const postCreateCompanion = (data) =>
    axiosInstance.post(API.COMPANION_CREATE, data)