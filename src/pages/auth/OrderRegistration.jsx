import { Anchor, Avatar, Checkbox, Container, Group, InputLabel, Paper, Text, TextInput, Textarea, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useFileLoad, useForm } from '../../hooks'
import './Auth.css';
import { StarReview } from '../../components/StarsReview';
import { Form } from 'react-bootstrap';
import { Button } from '@mantine/core';

const OrderRegistration = () => {

  const {values, name, surname, patronymic, birthday} = useForm({
    name: '',
    surname: '',
    patronymic: '',
    birthday: 'Ваш день рождения',
  });
  const profileImg = useFileLoad();

  return (
    <Container>
      <Paper withBorder p={50}>
        <Title>
          Билет на поезд такой то за много денег
        </Title>
        <br /><br />
        <Group>
          <div>
          <div/>
          <label htmlFor='img-loader' className='img-loader'>
            <img
              className='user-img'
              src={profileImg.imgUrl || require('../../res/icons/avatar.jpg')}
              alt='your photo'
            />
          </label>
          <input 
            id="img-loader"
            type='file'
            style={{opacity: '0', width: '0', height: '0', display: 'block'}}
            onChange={e => profileImg.handle(e)}
          />
          </div>
          <Group mb='10%'>
            <div style={{marginLeft: '20px'}}>
              <input className='user-input' {...name} placeholder='Имя'/><div/>
              <input className='user-input' {...surname} placeholder='Фамилия'/><div/>
              <input className='user-input' {...patronymic} placeholder='Отчество'/><div/>
              {/* <AdjInput {...name}/>
              <AdjInput {...surname}/>
              <AdjInput {...patronymic}/> */}
            </div>
          </Group>
        </Group>
        <br />
        <TextInput
          label='Ваш день рождения'
          style={{width: '200px'}}
          type='date'
        />
        <br />
        <Textarea
          label="Расскажите о себе"
          description="Это поможет подобрать вам лучших попутчиков"
          placeholder=""
          size='xl'
          inputMode='text'
          style={{
            minHeight: '200px'
          }}  
        />
        <Text mb={5}>Выберете несколько ключевых слов, описывающих вас наилучшим образом:</Text>
          <Form.Check
            type='checkbox'
            label={`Тег 1`}
            id={`disabled-default-checkbox`}
          />
          <Form.Check
            type='checkbox'
            label={`Тег 2`}
            id={`disabled-default-checkbox`}
          />
          <Form.Check
            type='checkbox'
            label={`Тег 3`}
            id={`disabled-default-checkbox`}
          />
          <Form.Check
            type='checkbox'
            label={`Тег 4`}
            id={`disabled-default-checkbox`}
          />
          <br />
        <InputLabel size='md'>Ваша оценка нашего предложения</InputLabel>
        <StarReview />
        <Group justify='center'>
          <Button type="submit" mt="20px" size='xl'>
            Заказать
          </Button>
        </Group>
      </Paper>
    </Container>
  )
}

export default OrderRegistration