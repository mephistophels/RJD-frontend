import {SvgCarriage} from "../components/SvgCarriage/SvgСarriage";
import React, {useEffect, useMemo} from "react";
import {Space, Title, Text, SegmentedControl, Group, Stack} from "@mantine/core";
import {useLocation, useSearchParams} from "react-router-dom";
import dayjs from "dayjs";
import {useSearchParamsForm} from "../hooks";

export const ChoosePlace = () => {
    const {values, carriage} = useSearchParamsForm({carriage: '1'})
    const {from, to, date, trainType, fromTime, toTime} = values
    return (
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
            <Title order={2}>Схема вагона</Title>
            <Space h={20}/>
            <SvgCarriage/>
            <Space h={20}/>
            <SegmentedControl {...carriage} size='md' color={'red'} data={['1', '2', '3', '4', '5', '6', '7', '8'].map(i => ({label: `${i} вагон`, value: i}))}/>
        </div>

    )
}