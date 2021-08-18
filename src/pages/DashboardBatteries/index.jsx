import React from 'react';
import { 
  RiBattery2ChargeLine ,
  RiBattery2Fill,
  RiBatteryShareFill,
  RiBattery2Line} from 'react-icons/ri';

import { Container } from './styles';

import { useBattery } from '../../hooks/battery';
import { useServicesBattery } from '../../hooks/servicesBattery';

export function DashboardBatteries() {
  const {handleFinishBatteryCharge , handleChargeBattery} = useBattery()
  const {servicesBattery} = useServicesBattery()
 
  return (
      <Container>
        <h1>Baterias</h1>

        <ul>
          {servicesBattery.map(service => (
              <li key={service.battery_id}>
                <div>
                  <div>
                    <strong>Bateria: </strong>
                    <p>{service.code}</p>
                  </div>
                  <div>
                    <strong>Status: </strong>
                    <p>{service.status}</p>
                  </div>
                </div>
                <div>
                  <strong>Data Inicial: </strong>
                  <p>{service.initial_date_service || service.initial_date_battery_service }</p>
                </div>
              
                <div>
                  <strong>Tempo de uso: </strong>
                  <p>{service.elapsedDateService || service.elapsedDateBatteryService}</p>
                </div>
               
                
                {
                  ( (service.status === 'Carregada') 
                    ?
                      <button  type="button">
                        <RiBattery2Fill size={20} color="green"/>
                      </button>
                    : <></>
                  )
                }
                {
                  ( (service.status === 'Carregando') 
                    ?
                      <button  
                        type="button"
                        onClick={
                          () => handleFinishBatteryCharge(service.battery_id)
                        }
                      >
                        <RiBattery2ChargeLine size={20} color="blue"/>
                      </button>
                    : <></>
                  )
                }
                {
                  ( (service.status === 'Em uso') 
                    ?
                      <button  type="button">
                      <RiBatteryShareFill size={20} color="red"/>
                      </button>
                    : <></>
                  )
                }
                {
                  ( (service.status === 'Aguardando') 
                    ?
                      <button  
                        onClick={() => handleChargeBattery(service.battery_id)}
                        type="button"
                      >
                        <RiBattery2Line size={20} color="orange"/>
                      </button>
                    : <></>
                  )
                }
              </li>
            )
          )}         
        </ul>
      </Container>
  );
}
