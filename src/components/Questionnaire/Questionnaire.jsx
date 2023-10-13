import React from 'react'
import { QuestionnaireImage } from './QuestionnaireImage';
import { Container, Group, TextInput, Textarea, Title, Text, Button, Checkbox, TagsInput, Paper, Radio } from '@mantine/core';

const data1 = [
  '12312cvxcv3123',
  '123fdv123123',
  '1231cvxcxcvxcv23123',
  '12312vcxv3123',
  '1231wefwef23123',
  '12312efef3123',
  '123123c123',
  '12312wefwef3123',
];
let data2 = [];
for (let i = 0; i < 100; i++) data2.push(`TAG_${i + 1}`);
const data3 = [
  {
    question: "wierfbgoiwerfbiowlerbfe?",
    answers: [
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
    ]
  },
  {
    question: "wierfbgoiwerfbiowlerbfe?",
    answers: [
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
    ]
  },
  {
    question: "wierfbgoiwerfbiowlerbfe?",
    answers: [
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
    ]
  },
  {
    question: "wierfbgoiwerfbiowlerbfe?",
    answers: [
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
    ]
  },

  {
    question: "wierfbgoiwerfbiowlerbfe?",
    answers: [
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
      "iefdjwoefwoe",
    ]
  },
]

const Questionnaire = ({
  submit
}) => {
  return (
    <Container p={0}>
      <Paper withBorder radius='10px' p={20}>
        <Group>
          <QuestionnaireImage />
          <Container ml='20px'>
            <Title>Имя</Title>
            <Title>Фамилия</Title>
            <Title>Отчество</Title>
            <TextInput
              label='Ваш день рождения'
              w='200px'
              type='date'
              />
            <br/><br/>
          </Container>
        </Group>
        <br />
        <Title>Расскажите о себе</Title>
        <Textarea
          description="Это поможет подобрать вам лучших попутчиков"
          placeholder=""
          size='xl'
          inputMode='text'
          style={{}}  
          />
        <br/>
        <Text mb={5}>Выберете несколько ключевых слов, описывающих вас наилучшим образом:</Text>
        {data1.map((e, i) => (
          <Checkbox key={e + i} label={e} mb={5}/>
          ))}
        <br/>
        <Text mb={5}>Добавьте что нибудь</Text>
        <TagsInput
          placeholder="Pick value or enter anything"
          data={data2}
          maxDropdownHeight={200}
          />
        <br/>
        <Container>
          <Title>
            Ответьте на несколько вопросов
          </Title>
          <Text size='xl' mb={20}>
            Это улучшит вашу статистику
          </Text>
          {data3.map((e, i) => (
            <Container key={e.question + i} mb={20}>
              <Text size='lg'>
                {e.question}
              </Text>
              {e.answers.map((g, j) => (
                <Radio name={e.question + i} key={g + j} label={g} mb={8}/>
              ))}
            </Container>
          ))}
        </Container>


        <Group justify='center'>
          <Button type="submit" mt="20px" size='xl' onClick={submit}>
            Готово
          </Button>
        </Group>
      </Paper>
      <br/><br/><br/><br/><br/><br/>
    </Container>
  )
}

export default Questionnaire;