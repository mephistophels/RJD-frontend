import {useEffect, useState} from 'react';
import {ReactComponent as Notify} from '../../res/icons/notify.svg';
import {ReactComponent as User} from '../../res/icons/user.svg';
import {Container, Group, Tabs, Text, TextInput, Title} from '@mantine/core';
import classes from './Header.module.css';
import {CustomSegmentedControl} from '../CustomSegmentedControl/CustomSegmentedControl';
import {Coin} from "../../res/icons/coin";
import {Link, useLocation} from 'react-router-dom';
import {PATH} from "../../consts";
import {UserCard} from "../UserCard";
import { api } from '../../api';
import { updateBalance } from '../../store/slices/balance';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import BurgerNavigation from './BurgerNavigation';

export function Header() {

    const largeMenu = useMediaQuery('(min-width: 850px)');
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        console.log(!largeMenu && opened)
    }, [opened, largeMenu])

    const [user, setUser] = useState({});
    const balance = useSelector(state => state.balance);
    const dispatch = useDispatch();

    useEffect(() => {
        api.auth.getMe()
        .then(data => {
            setUser(data);
            dispatch(updateBalance(data?.balance?.amount));
        });
    }, []);

    const location = useLocation().pathname;
    const isImplementer = location.includes('implementer')
    const locationSplit = location.split('/').filter(v => v != '')
    const isExchange = (PATH.IMPLEMENTOR_EXCHANGE === location || locationSplit.length === 2 && locationSplit[1] !== 'todo')

    const userCardData = {
        user: user,
        isImplementor: isImplementer,
        size: '60px',
        reverse: true,
        radius: 'xl',
        edit: true
    }

    const getImlementerLinks = () => {
        if (!location.includes('implementer')) return <div></div>
        return (
        <div className={classes.linkwrapper}>
            <Link className={!isExchange ? classes.simpletlink : classes.currentlink}
                    to={PATH.IMPLEMENTOR_EXCHANGE}>Биржа</Link>
            <Link className={isExchange ? classes.simpletlink : classes.currentlink}
                    to={PATH.ORDERS_OF_IMPLEMENTOR}>Взятые заказы</Link>
        </div>)
    }

    return (
        <>
            <header className={classes.header} style={{position: 'fixed', zIndex: '20', width: '100%'}}>
                <Container size="lg" className={classes.inner}>
                    <Group justify="space-between" w='100%'>
                        {!largeMenu && 
                        <Burger opened={opened} onClick={() => {
                            setOpened(!opened)
                        }}></Burger>}
                        <CustomSegmentedControl/>
                        {largeMenu &&
                        <Group gap={5} visibleFrom="xs">
                            {getImlementerLinks()}
                            <Link to={PATH.BALANCE}>
                                <Group position='apart' gap={5} mr={10}>
                                    <Title order={4} style={{color: '#777777'}}>{balance?.balance}</Title><Coin/>
                                </Group>
                            </Link>
                            {user && <UserCard {...userCardData}/>}
                        </Group>}
                    </Group>
                </Container>
                <BurgerNavigation show={!largeMenu && opened} userCardData={userCardData} getImlementerLinks={getImlementerLinks}/>
            </header>
        </>


    );
}