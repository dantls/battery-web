import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

const ToastContext = createContext<ToastContextData>({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const addToast = useCallback(
    ({ type, title, description }) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(){
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('UseToast deve ser utilizado dentro do ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };