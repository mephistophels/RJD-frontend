import {
    TextInput,
    Button,
    Group,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm } from '../../hooks';
const Login = ({
    submit
}) => {

    const {values, email, password} = useForm({
        email: '',
        password: '',
    })

    return (
        <div style={{paddingBottom: '20px'}}>
            <Group justify='space-between' p={10}>
                <TextInput 
                    label="Email"
                    radius={0}
                    size='md'
                    type="email"
                    placeholder="you@mantine.dev"
                    required
                    {...email}
                />
                <TextInput 
                    label="password"
                    type="password"
                    radius={0}
                    size='md'
                    placeholder="Your password"
                    required
                    {...password}
                />
            </Group>
            <Button type="sumit" fullWidth mt={50} onClick={() => submit({...values})}>
                Sign in
            </Button>
        </div>
  )
}

export default Login