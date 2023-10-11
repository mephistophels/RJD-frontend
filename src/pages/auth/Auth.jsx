import { Container, Group, Paper, Text } from '@mantine/core'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../consts';
import Login from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { api } from '../../api';
import './Auth.css';

const Nav = ({c}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Text
        onClick={() => navigate(PATH.LOGIN)}
        className={`link-text ${c == 0 && 'link-current'}`
      }>Логин</Text>
      <Text
        onClick={() => navigate(PATH.BASE_REGISTRATION)}
        className={`link-text ${c == 1 && 'link-current'}`
      }>Регистрация</Text>
    </div>
  );

}


const Auth = () => {

  const path = useLocation().pathname;
  const navigate = useNavigate();

  const login = async (data) => {
    await api.auth.postLogin(data);
    navigate('/');
  };

  return (
    <div className='bg'>
      <div>
      <Container size={620} my={40} mt='250px' p={0} className='container-shadow' style={{backgroundColor: 'white'}}>
          <Nav c={path === PATH.BASE_REGISTRATION}/>
          <br/>
          <Container style={{backgroundColor: 'white'}}>
            <div style={{width: '100%'}}>
              {path === PATH.LOGIN && <Login login={login}/>}
              {path === PATH.BASE_REGISTRATION && <RegistrationForm />}
            </div>
          </Container>
      </Container>
      </div>
    </div>
  )
}

export default Auth