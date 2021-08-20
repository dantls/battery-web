import React, { createContext , useState, useEffect, useContext, useCallback} from 'react';
import {api} from '../../services/api';
import { formatDateElapsed } from '../../utils/formatDateElapsed';
import { formatDate } from '../../utils/formatDate';


const ServicesBatteryContext = createContext();

const ServicesBatteryProvider = ({children}) => {

  const [services, setServices] = useState([]);

  const loadServicesBatteries = useCallback(
    async() => {
      const response = await api.get(`/batteries-services`);
      setServices(response.data)
    },
    [],
  );

  useEffect(()=>{
    loadServicesBatteries();
  },[loadServicesBatteries])

  let elapsedDateBatteryService=null;
  let elapsedDateService=null;
  let passedDateBatteryService=null
  let passedDateService=null

  const servicesBattery = services.map(item => {
    passedDateService=null
    passedDateBatteryService=null
    elapsedDateService=null;
    elapsedDateBatteryService=null;

    if(!!item.initial_date_battery_service){
      passedDateBatteryService = new Date(item.initial_date_battery_service);
      elapsedDateBatteryService = formatDateElapsed(passedDateBatteryService)
    }
    if(!!item.initial_date_service){
      passedDateService = new Date(item.initial_date_service);
      elapsedDateService = formatDateElapsed(passedDateService)
    }

    const service = {
      ...item,

      "initial_date_service": item.initial_date_service 
        ? formatDate(item.initial_date_service)
        : null,

      elapsedDateService ,

      "initial_date_battery_service": item.initial_date_battery_service 
        ? formatDate(item.initial_date_battery_service)
        : null,

      elapsedDateBatteryService
    }
    return(
      service
    )
  })


  return (
    <ServicesBatteryContext.Provider value={{servicesBattery, loadServicesBatteries}}>
      {children}
    </ServicesBatteryContext.Provider>
  )
}

function useServicesBattery(){
  const context = useContext(ServicesBatteryContext)
  
  if(!context){
    throw new Error('UseBattery deve ser utilizado com o BatteryProvider')
  }

  return context;
}

export { ServicesBatteryProvider, useServicesBattery };