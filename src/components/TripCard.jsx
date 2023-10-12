import {Button, Card, Container, Group, Stack, Text, Title} from "@mantine/core";
import React from "react";
import {Coin} from "../res/icons/coin";
import dayjs from "dayjs";
import 'dayjs/locale/ru';

export const TripCard = ({
                             fromTime, toTime,
                             from,
                             to,
                             trainType,
                             date,
                             price,
                         }) => {

    console.log(date)

    return (
        <Card withBorder mb={20}>
            <Group justify='space-between' align='stretch'>

                <div>
                    <Title order={4}>{from} → {to}</Title>
                    <Title>{fromTime} → {toTime}</Title>
                    <Text>
                        {dayjs(date).locale('ru').format('DD MMMM YYYY')}
                    </Text>
                    <Text>{trainType}</Text>
                </div>
                <Stack justify='space-between'>
                    <Group gap={5}>
                        <Title order={4}>${price}</Title>
                        <Coin color='black'/>
                    </Group>
                    <Button>
                        Купить
                    </Button>
                </Stack>

            </Group>

        </Card>
    )
}