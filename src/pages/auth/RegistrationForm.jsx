import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Group,
    InputLabel,
} from '@mantine/core';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { theme } from '../..';
import Input from '../../components/Input/Input';

const RegistrationFrom = ({
    registration
}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // registration({email, password, phone});
    };

    return (
        <form onSubmit={e => handleSubmit(e)} style={{paddingBottom: '20px'}}>
            <Group justify='space-between' p={10}>
                <Input 
                    label="Email"
                    type="email"
                    placeholder="you@mantine.dev"
                    required
                />
                <Input 
                    label="password"
                    type="password"
                    placeholder="Your password"
                    required
                />
                <InputLabel>Ваш номер</InputLabel>
                <PhoneInput
                    country={'ru'}
                    value={phone}
                    onChange={data => setPhone(data)}
                />
            </Group>
            <Button type="submit" fullWidth mt="20px" color={theme.colors.gray[1]}>
                Registration
            </Button>
        </form>
  )
}

export default RegistrationFrom;