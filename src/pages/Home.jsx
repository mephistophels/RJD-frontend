import {Button, Group, Select} from "@mantine/core";
import {DateInput} from "@mantine/dates";
import {useForm} from "../hooks";
import {TripCard} from "../components/TripCard";
import {SvgCarriage} from "../components/SvgCarriage/SvgСarriage";

export const Home = () => {
    const {values, from, to, trainType, date} = useForm({
        trainType: 'Скоростной',
        date: new Date(),
        from: 'Москва',
        to: 'Санкт-Петербург'
    })
    function requestCarriage() {
        // console.log(values)
    }
    return (
        <>
            <Group mb={25}>
                <Select label="Откуда" placeholder="Выберите город" data={['Москва']}/>
                <Select label="Куда" placeholder="Выберите город" data={['Санкт-Петербург']}/>
                <DateInput {...date} label="Дата отправления" placeholder="Выберите дату" />
                <Button mt={25} onClick={requestCarriage}>Найти</Button>
            </Group>
            <TripCard {...values} price={1000} trainType={'Волга'} fromTime='7:13' toTime='15:44'/>
            <TripCard {...values} price={1000} trainType={'Премиум'} fromTime='9:13' toTime='17:44'/>
            <TripCard {...values} price={1000} trainType={'Арктика'} fromTime='8:45' toTime='16:44'/>
            <SvgCarriage/>
        </>
    );
}