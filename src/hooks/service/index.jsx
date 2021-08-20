import React, { createContext , useState, useEffect, useContext, useCallback} from 'react';
import {api} from '../../services/api';
import { formatDateElapsed } from '../../utils/formatDateElapsed';
import { formatDate } from '../../utils/formatDate';


const ServiceContext = createContext();

const ServiceProvider = ({children}) => {

  const [servicesState, setServicesState] = useState([]);

  const loadServices = useCallback(
    async() => {
      const response = await api.get(`services`);
      setServicesState(response.data)
    },
    [],
  );

  useEffect(()=>{
    loadServices();
  },[loadServices])

  const services = servicesState.map(item => {
    const passed = new Date(item.initial_date);

    const elapsed = formatDateElapsed(passed)

    const service = {
      ...item,
      "initial_date": formatDate(item.initial_date),
      elapsed 
    }
    
    return(
      service
    )
  })
  return (
    <ServiceContext.Provider value={{services,loadServices}}>
      {children}
    </ServiceContext.Provider>
  )
}

function useService(){
  const context = useContext(ServiceContext)
  
  if(!context){
    throw new Error('UseService deve ser utilizado com o BatteryProvider')
  }

  return context;
}

export { ServiceProvider, useService };