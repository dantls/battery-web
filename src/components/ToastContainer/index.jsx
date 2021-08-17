import React from 'react';
import Toast from './Toast';

import { Container } from './styles';

import { useTransition } from 'react-spring';


const ToastContainer = ({ messages }) => {

  const transition = useTransition(messages, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 }
  });
 
  return (
    <Container>
      { messages.map((message) => (
        <Toast 
          key={message.id} 
          message={message} 
          transition={transition}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;