import React from 'react';
import { List } from '../List';

import { Container } from './styles';


function Board({list}) {

  return (
    <Container>
      {list.map(item => <List data={item}/>)}
      
    </Container>
  )
}

export {Board};