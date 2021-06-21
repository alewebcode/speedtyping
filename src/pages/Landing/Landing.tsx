import React from 'react';
import { Container, Content, Title } from './styles';
import { useHistory } from 'react-router-dom';


export function Landing(){
  const history = useHistory();

  function handleClick() {
    history.push('/test-typing');
  }

  return (
    <Container>
      <Content>
          <Title>Speed Typing</Title>
          <h3>A velocidade de digitação será medida,para isso você deverá digitar o texto conforme apresentado</h3>

          <button onClick={handleClick}>
            Iniciar teste
          </button>
      </Content>
  </Container>
  )
}