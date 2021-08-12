import React from 'react';

import { GlobalStyle } from "./styles/global";
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';

function App() {

  return (
    <BrowserRouter >
      <GlobalStyle />

      <AppProvider>
        <Routes />
        
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
