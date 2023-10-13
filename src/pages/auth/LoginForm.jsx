import {
    TextInput,
    Button,
    Group, Space,
} from '@mantine/core';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

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
            <TextInput
                label="Email"
                type="email"
                placeholder="you@mantine.dev"
                required
            />
            <Space h='md'/>
            <TextInput
                label="password"
                type="password"
                placeholder="Your password"
                required
            />
            <Space h='xl'/>
            <Button type="submit" fullWidth>
                Sign in
            </Button>
        </form>
    )
}

export default Login