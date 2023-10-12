import {
    TextInput,
    Button,
    Group,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const Login = ({
    login
}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            <Button type="submit" fullWidth mt={50}>
                Sign in
            </Button>
        </form>
  )
}

export default Login