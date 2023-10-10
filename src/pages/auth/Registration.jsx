import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import classes from './Registration.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "../../hooks";
import { api } from '../../api';

export default function Registration() {
    const {values, patronymic, email, password, name, surname} = useForm({
        email: '',
        password: '',
        name: '',
        surname: '',
        patronymic: ''
    });
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        await api.auth.postRegistration({...values});
        await api.auth.postLogin({email: values.email, password: values.password});
        navigate('/');
    };

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <form onSubmit={handleSubmit}>
                    <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                        Welcome to Freelance!
                    </Title>

                    <TextInput
                        label="Email"
                        placeholder="hello@gmail.com"
                        size="md"
                        {...email}
                    />

                    <PasswordInput
                        label="Пароль"
                        placeholder="Твой пароль"
                        mt="md"
                        size="md"
                        {...password}
                    />

                    <br/>

                    <TextInput
                        label="Фамилия"
                        placeholder="Иванович"
                        size="md"
                        {...surname}
                    />

                    <br/>

                    <TextInput
                        label="Имя"
                        placeholder="Иван"
                        size="md"
                        {...name}
                    />

                    <br/>

                    <TextInput
                        label="URL на аватар (необязательно)"
                        placeholder="https://example.com"
                        size="md"
                        {...patronymic}
                    />

                    <Button type="submit" fullWidth mt="xl" size="md">
                        Login
                    </Button>

                </form>

                <Text ta="center" mt="md">
                    Account already exists?{' '}
                    <Link to={'/login'}>
                        <Anchor fw={700}>
                            Login
                        </Anchor>
                    </Link>
                </Text>
            </Paper>
        </div>
    );
}

// export default function RegistrationPage() {
//     return (
//         <div className={classes.wrapper}>
//             <Paper className={classes.form} radius={0} p={30}>
//
//                 <TextInput label="Email" placeholder="hello@gmail.com" size="md"/>
//                 <PasswordInput label="Пароль" placeholder="Твой пароль" mt="md" size="md"/>
//                 <br/>
//                 <TextInput label="Имя" placeholder="Иван" size="md"/>
//                 <br/>
//                 <TextInput label="Фамилия" placeholder="Иванович" size="md"/>
//                 <Checkbox label="Keep me logged in" mt="xl" size="md"/>
//                 <Button fullWidth mt="xl" size="md">
//                     Login
//                 </Button>
//
//             </Paper>
//         </div>
//     );
// }