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

const RegistrationFrom = ({submit}) => {

    const {values, email, password, phone} = useForm({
        email: '',
        password: '',
        phone: '',
    });
    const [showQuestionnaire, setShow] = useState(false);

    return (
        <>
        <Modal
            // withCloseButton={false}
            opened={showQuestionnaire} 
            onClose={() => setShow(false)} 
            size='100%'
            fullScreen
            radius={0}
            transitionProps={{ transition: 'fade', duration: 200 }}
        >   
            <Questionnaire submit={() => setShow(false)}/>
        </Modal>
        <form onSubmit={() => {}} style={{paddingBottom: '20px'}}>
            <Group display='block' p={10}>
                <Group justify='space-between'>
                    <TextInput
                        {...email}
                        label="Email"
                        radius={0}
                        size='md'
                        type="email"
                        placeholder="you@mantine.dev"
                        required
                    />
                    <TextInput
                        {...password}
                        label="password"
                        type="password"
                        radius={0}
                        size='md'
                        placeholder="Your password"
                        required
                    />
                </Group>
                <br />
                <InputLabel>Ваш номер</InputLabel>
                <PhoneInput
                    country={'ru'}
                    {...phone}
                />
            </Group>
            <br /><br />
            <Group>
                <Text c='black'>Для регистрации необходимо заполнить анкету</Text>
                <Button size='xs' color={theme.colors.button[0]} onClick={() => setShow(true)}>
                    Заполнить
                </Button>
            </Group>
            <br />
            <Button type="submit" fullWidth mt="20px" onClick={() => submit({...values})}>
                Registration
            </Button>
        </form>
    </>
  )
}

export default RegistrationFrom;