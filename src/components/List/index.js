import React from 'react';
import { Card } from '../Card';

import { Container } from './styles';


function List({data}) {

  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
      </header>
      <ul>
        {data.cards.map(card=> <Card key={card.id} data={card} />)}
      </ul>
    </Container>
  )
}

export {List};