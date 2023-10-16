import {SvgCarriage} from "../components/SvgCarriage/SvgСarriage";
import React, {useEffect, useMemo, useState} from "react";
import {
    Space,
    Title,
    Text,
    SegmentedControl,
    Group,
    Stack,
    Paper,
    Button,
    Avatar,
    Card,
    Modal,
    Badge
} from "@mantine/core";
import dayjs from "dayjs";
import {useSearchParamsForm} from "../hooks";
import { api } from "../api";
import { Container } from "@mantine/core";
import { VscArchive } from "react-icons/vsc";
import { useQuestionnaireBaby } from "../components/Questionnaire/useQuestionaireBaby";
import QuestionnaireBaby from "../components/Questionnaire/QuestionnaireBaby"
import './Companion.css';
import { showAlert } from "../utils";

const ticketCost = 1000;

const MyProfile = {
    questionnaire: {
        name: '123123',
        surname: '123123',
        patronymic: '123123',
        tags: [
            '1', '2', '3'
        ],
    },
    phone: '123123123',
    email: '123123123@mail.ru',
}

export const ChoosePlace = () => {

    const {values, carriage} = useSearchParamsForm({carriage: 1})
    const {from, to, date, trainType, fromTime, toTime} = values
    const [trainData, setTrainData] = useState(null);

    const [myPlace, setMyPlace] = useState(null);
    const [cost, setCost] = useState(0);

    const [myCompanions, setMyCompanios] = useState([]);
    const [companions, setCompanios] = useState([]);
    const [moveComponentId, setMoveComponentId] = useState(null);

    const questionnaire = useQuestionnaireBaby();
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);


    useEffect(() => {
        api.user.getCompanionList()
        .then(data => setMyCompanios(data));
    }, []);

    useEffect(() => {
        api.train.getTrain()
        .then(data => setTrainData(data));
    }, []);

    function appendUserToTrain(place, carriage_, user) {
        setTrainData(prev => ({
            carriages: prev.carriages.map((carr, idx) => 
                idx + 1 == carriage_ ? ({
                    places: prev.carriages[idx].places.map((e, index) => 
                        index + 1 == place ? {...e, user} : e
                )}) : carr)
        }))
    }
    function removeUserFromTrain(place, carriage_) {
        setTrainData(prev => ({
            carriages: prev.carriages.map((carr, idx) => 
                idx + 1 == carriage_ ? ({
                    places: prev.carriages[idx].places.map((e, index) => 
                        index + 1 == place ? {...e, user: null} : e
                )}) : carr)
        }))
    }

    
    const choosePlace = (place) => {
        if (trainData.carriages[carriage.value - 1].places[place - 1].user) {
            showAlert("Место занято");
            return;
        }

        if (!myPlace) {
            setMyPlace({place, carriage: carriage.value});
            setCost(ticketCost);
            appendUserToTrain(place, carriage.value, MyProfile);
            return;
        }
        if (moveComponentId !== null) {
            setCost(prev => prev + ticketCost) 
            setCompanios(prev => [...prev, { ...myCompanions[moveComponentId], place, carriage: carriage.value }]);
            appendUserToTrain(place, carriage.value, { ...myCompanions[moveComponentId], place, carriage: carriage.value });
            setMyCompanios(prev => prev.filter((e, i) => i !== moveComponentId));
            setMoveComponentId(null);
        }
    }

    const addCompanionSubmit = () => {
        setMyCompanios(prev => [...prev, {questionnaire: questionnaire.dto}]);
        questionnaire.clear();
        setShow(false);
    }
    useEffect(() => {
        console.log(trainData)
    }, [trainData])

    return (
        <>
            <Modal opened={showConfirm} onClose={() => setShowConfirm(false)} title="Оплата" centered>
                <Container m={0} p={0}>
                    <Title order={2}>
                        Место: {myPlace?.place}
                    </Title>
                    <Title order={2}>
                        Вагон: {myPlace?.carriage}
                    </Title>
                    <Title order={2}>
                        Компаньонов: {companions.length}
                    </Title>
                    <Title order={2}>
                        Итоговая Стоимость: {cost}
                    </Title>
                </Container>
                <Space h='lg'/>
                <Button onClick={() => setShowConfirm(false)}>Оплатить</Button>
            </Modal>
            <Modal
                opened={show}
                onClose={() => setShow(false)}
                size='70%'
                radius={0}
                transitionProps={{transition: 'fade', duration: 200}}
            >
                <QuestionnaireBaby submit={addCompanionSubmit} questionnaire={questionnaire}/>
            </Modal>
            <div>
                <Group justify='space-between' align='stretch'>
                    <Title>Выберите место</Title>
                    <Stack align='flex-end' gap={0}>
                        <Title order={4}>{from} → {to}</Title>
                        <Title>{fromTime} → {toTime}</Title>
                        <Text>
                            {dayjs(date).locale('ru').format('DD MMMM YYYY')}
                        </Text>
                        <Text>{trainType}</Text>
                    </Stack>
                </Group>
                <Space h={20}/>
                <Group>
                <Title order={2}>Схема вагона</Title>
                    <Badge color='#87a4ff'>Занято</Badge>
                    <Badge color='hsl(90, 60%, 56%)'>Подходящее место</Badge>
                    <Badge color='hsl(20, 60%, 56%)'>Неподходящее место</Badge>
                    <Badge color='#F4A0FF'>Ваше место</Badge>
                </Group>
                <Space h={20}/>
                {trainData && <SvgCarriage 
                    data={trainData.carriages[carriage.value - 1]} 
                    choosePlace={choosePlace}
                    myPlace={myPlace}
                    companionsPlaces={companions}
                />}
                <Space h={20}/>
                <SegmentedControl {...carriage} size='md' color={'red'} data={['1', '2', '3', '4', '5', '6', '7', '8'].map(i => ({label: `${i} вагон`, value: i}))}/>
                <Space h={20}/>
                {myPlace &&
                <div>
                    <Paper withBorder p={20} radius={10}>
                        <Container m={0} p={0}>
                            <Title order={2}>
                                Место: {myPlace.place}
                            </Title>
                            <Title order={2}>
                                Вагон: {myPlace.carriage}
                            </Title>
                            <Title order={2}>
                                Стоимость: {cost}
                            </Title>
                        </Container>
                        <Space h={20}/> 
                        <Group justify="space-between" mt={10}>
                            <Container m={0} p={0} ml={0}>
                                <Title order={2}>
                                    Едут со мной
                                </Title>
                            </Container>
                            <Container m={0} p={0} mr={0}>
                                <Group justify="space-between">
                                    <Title order={2}>
                                        Могу взять с собой
                                    </Title>
                                    <Button onClick={() => setShow(true)}>
                                        Добавить
                                    </Button>
                                </Group>
                            </Container>
                        </Group>
                        <Space h={10} />
                        <Group justify="space-between" mt={10} w='100%' gap={0}>
                            <Container m={0} p={0} ml={0} w='48%' mih='200px'> 
                                {companions.length === 0 ?  
                                <Title order={2} mr={0} c='#B2B4B5'> 
                                    Для добавления компаньона в заказ нажмите на него в списке спрва и зарегистрируйте его на желаемое место
                                </Title>
                                :companions.map((e, idx) => (
                                    <Companion 
                                        key={idx} 
                                        data={e.questionnaire}
                                        place={e.place}
                                        carriage={e.carriage}
                                        remove={() => {
                                            setCompanios(prev => prev.filter((e, i) => i !== idx));
                                            setMyCompanios(prev => [...prev, e]);
                                            removeUserFromTrain(e.place, e.carriage);
                                            setCost(prev => prev - ticketCost) 
                                        }}
                                        showRemove={true}
                                        showPlace={true}
                                    />
                                ))}
                            </Container>
                            <Container m={0} p={0} mr={0} w='48%' mih='200px' style={{textAlign: 'end'}}>
                                {myCompanions.length === 0 ? 
                                <Title order={2} c='#B2B4B5'>
                                    Добавьте нового компаньона
                                </Title>
                                :myCompanions.map((e, idx) => (
                                    <Companion
                                        movable={idx === moveComponentId}
                                        showPlace={false}
                                        key={idx}
                                        data={e.questionnaire}
                                        onClick={() => setMoveComponentId(idx)}
                                        my={true}
                                    />
                                ))}
                            </Container>
                        </Group>
                        <Button fullWidth onClick={() => setShowConfirm(true)}>Оплатить</Button>
                    </Paper>
                </div>
                }
            </div>
        </>
    )
}


const Companion = ({data, remove, showPlace, onClick, movable, my, showRemove, place, carriage}) => {

    let classes = 'companion-container ';
    if (my) classes += 'companion-container-hv ';
    if (movable) classes += 'companion-movable'


    return (
      <Paper withBorder p={0} mb={10} className={classes} onClick={onClick}>
        <Group justify='space-between'>
          <div>
            <Group gap={0}>
              <Avatar ml={20}/>
              <Card>
                <Title size='md'>
                  {data.name} {data.surname} {data.patronymic}
                </Title>
                {showPlace && <Text>
                    Вагон: {carriage} Место: {place} 
                </Text>}
              </Card>
            </Group>
          </div>
          {showRemove && <VscArchive
            size='30px'
            color='red'
            style={{marginRight: '20px'}}
            onClick={remove}
            cursor='pointer'
          />}
        </Group>
      </Paper>
    );
  }