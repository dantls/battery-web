import React from 'react';

import { AuthProvider } from './auth/';
import { ModalProvider } from './modal/';
import { BatteryProvider } from './battery/';

const AppProvider= ({ children }) => (
  <AuthProvider>
    <BatteryProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </BatteryProvider>
  </AuthProvider>
);
export default AppProvider;