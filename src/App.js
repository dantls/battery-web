import { useState } from 'react';

import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { NewServiceModal } from "./components/NewServiceModal";

function App() {
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  function handleOpenNewServiceModal(){
    setIsNewServiceModalOpen(true);
  }
  function handleCloseNewServiceModal(){
    setIsNewServiceModalOpen(false);
  }

  return (
    <BrowserRouter >
      <Header onPropsNewServiceModal={handleOpenNewServiceModal}/>
      <Routes />
      <GlobalStyle />
      <NewServiceModal 
        isOpen={isNewServiceModalOpen}
        onRequestClose={handleCloseNewServiceModal}
      />
    </BrowserRouter>
  )
}

export default App;
