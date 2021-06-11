import React from 'react';

import { Container, Label } from './styles';

function Card({data}) {

  return (
    <Container onClick={()=>{console.log()}} >
       
      <header>
        <Label color={data.label} /> 
      </header>
      <p>{data.content}</p>
    </Container>
  )
}

export {Card};