import React,{createContext, useContext, useState} from 'react';

const ModalContext = createContext({});

const ModalProvider = ({children}) =>{
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  function handleOpenNewServiceModal(){
    setIsNewServiceModalOpen(true);
  }
  function handleCloseNewServiceModal(){
    setIsNewServiceModalOpen(false);
  }

  return (
    <ModalContext.Provider value={{
      handleCloseNewServiceModal,
      handleOpenNewServiceModal,
      isNewServiceModalOpen,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

function useModal(){
  const context = useContext(ModalContext)
  
  if(!context){
    throw new Error('UseModal deve ser utilizado com o AuthModal')
  }

  return context;
}

export { ModalProvider, useModal };