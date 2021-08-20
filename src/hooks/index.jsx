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
      
        <ServiceProvider>
          <ServicesBatteryProvider>
            <BatteryProvider>
              <ModalProvider>
                {children}
              </ModalProvider>
            </BatteryProvider>
          </ServicesBatteryProvider>
        </ServiceProvider>

      
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;