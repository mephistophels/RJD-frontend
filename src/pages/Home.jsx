import {Group, Select} from "@mantine/core";

export const Home = () => {
    return (
        <Group>
            <Select label="Откуда" placeholder="Выберите город" data={['Москва']}/>
            <Select label="Куда" placeholder="Выберите город" data={['Санкт-Петербург']}/>
            <Select label="Тип поезда" placeholder="Выберите тип поезда" data={['Скоростной', 'Экспресс', 'Пассажирский']}/>
            <DateInput label="Дата отправления" placeholder="Выберите дату" />
        </Group>
    );
}