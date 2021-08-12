import React from 'react';

import { AuthProvider } from './auth/';
import { ModalProvider } from './modal/';
import { ToastProvider } from './toast/';
import { BatteryProvider } from './battery/';

const AppProvider= ({ children }) => (
  <AuthProvider>
     <ToastProvider>
      <BatteryProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </BatteryProvider>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;