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
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { theme } from '../..';
import Input from '../../components/Input/Input';
const Login = ({
    login
}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // login({email, password});
    };

    return (
        <form onSubmit={e => handleSubmit(e)} style={{paddingBottom: '20px'}}>
            <Group justify='space-between' p={10}>
                <TextInput 
                    label="Email"
                    radius={0}
                    size='md'
                    type="email"
                    placeholder="you@mantine.dev"
                    required
                />
                <TextInput 
                    label="password"
                    type="password"
                    radius={0}
                    size='md'
                    placeholder="Your password"
                    required
                />
            </Group>
            <Button type="submit" fullWidth color={theme.colors.gray[1]} mt={50}>
                Sign in
            </Button>
        </form>
  )
}

export default Login