import React, { useEffect } from 'react';

import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { useToast } from '../../../hooks/toast';

import { Container } from './styles';

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = ({ message, transition }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 300000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);


  const fragment = transition((style, item) => {
    return (
      
         <Container
            type={item.type}
            hasdescription={Number(!!item.description)}
            style={style}
          >
            {icons[item.type || 'info']}
            <div>
              <strong>{item.title}</strong>
              {item.description && <p>{item.description}</p>}
            </div>
            <button onClick={() => removeToast(item.id)} type="button">
              <FiXCircle size={18} />
            </button>
        </Container>
    )
  });

  return (
    <>
      {fragment}
    </>
  );
};

export default Toast;