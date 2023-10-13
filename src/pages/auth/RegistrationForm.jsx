import {
    TextInput,
    Button,
    Group,
    InputLabel,
    Text,
    Modal,
} from '@mantine/core';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { theme } from '../../index';
import { useForm } from '../../hooks';
import Questionnaire from '../../components/Questionnaire/Questionnaire';
import { Form } from 'react-bootstrap';

const RegistrationFrom = ({registration}) => {

    const {value, email, password, phone} = useForm({
        email: '',
        password: '',
        phone: '',
    });

    const [showQuestionnaire, setShow] = useState(false);

    return (
        <>
            <Modal
                opened={showQuestionnaire}
                onClose={() => setShow(false)}
                size='100%'
                fullScreen
                radius={0}
                transitionProps={{transition: 'fade', duration: 200}}
            >
                <Questionnaire submit={() => setShow(false)}/>
            </Modal>
            <div onSubmit={() => {
            }} style={{paddingBottom: '20px'}}>
                    <TextInput
                        {...email}
                        label="Email"
                        type="email"
                        placeholder="you@mantine.dev"
                        required
                    />
                    <Space h='sm'/>
                    <TextInput
                        {...password}
                        label="password"
                        type="password"
                        placeholder="Your password"
                        required
                    />
                    <Space h='sm'/>
                    <InputLabel>Ваш номер</InputLabel>
                    <PhoneInput
                        country={'ru'}
                        width={'100%'}
                        {...phone}
                    />
                <Button type="submit" size='xs' color={theme.colors.button[0]} onClick={() => setShow(true)}>
                    Дополнительные данные
                </Button>
                <br/>
                <Button type="submit" fullWidth>
                    Registration
                </Button>
            </div>
        </>
    )
}

export default RegistrationFrom;