import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
} from '@mantine/core';
import classes from './Login.module.css';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { api } from '../../api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        await api.auth.postLogin({email, password});
        navigate('/');
    };
    return (
        <Container size={420} my={40}>
            <form onSubmit={handleSubmit}>
                <Title ta="center" className={classes.title}>
                    Welcome back!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Do not have an account yet?{' '}

                    <Link to={'/registration'}>
                        <Anchor size="sm" component="button">
                            Create account
                        </Anchor>
                    </Link>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput
                        label="Email"
                        placeholder="you@mantine.dev"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        required
                        mt="md"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button type="submit" fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}
