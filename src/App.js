import { useState } from 'react';

import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import Routes from './routes';
import {SignIn} from './pages/SignIn'
import { BrowserRouter } from 'react-router-dom';
import { NewServiceModal } from "./components/NewServiceModal";

import {AuthProvider} from './context/AuthContext';


function App() {
  

  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  function handleOpenNewServiceModal(){
    setIsNewServiceModalOpen(true);
  }
  function handleCloseNewServiceModal(){
    setIsNewServiceModalOpen(false);
  }

  return (
    <>
      <AuthProvider>
        <BrowserRouter >
          {/* <Header onPropsNewServiceModal={handleOpenNewServiceModal}/> */}
          <SignIn />
          {/* <Routes /> */}
          
          <NewServiceModal 
            isOpen={isNewServiceModalOpen}
            onRequestClose={handleCloseNewServiceModal}
          />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

export default App;
