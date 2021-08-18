import React from 'react';

import { AuthProvider } from './auth/';
import { ModalProvider } from './modal/';
import { ToastProvider } from './toast/';
import { BatteryProvider } from './battery/';
import { ServicesBatteryProvider } from './servicesBattery/';
import { ServiceProvider } from './service/';

const AppProvider= ({ children }) => (
  <AuthProvider>
     <ToastProvider>
      <BatteryProvider>
        <ServiceProvider>
          <ServicesBatteryProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </ServicesBatteryProvider>
        </ServiceProvider>

      </BatteryProvider>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;