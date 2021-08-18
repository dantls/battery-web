import React from 'react';
import Toast from './Toast';

import { Container } from './styles';

import { useTransition } from 'react-spring';

const ToastContainer = ({ messages }) => {

  const transition = useTransition(messages, {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
  });
 
  
  const toast = transition((style, item) => {
    return (
      <Toast 
        style={style}
        message={item}
      />
    )
  });

   return (
    <Container>
     {toast}
    </Container>
  );
};

export default ToastContainer;