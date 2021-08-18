import React, { createContext , useState, useEffect, useContext} from 'react';
import {api} from '../../services/api';
import { formatDateElapsed } from '../../utils/formatDateElapsed';
import { formatDate } from '../../utils/formatDate';


const ServiceContext = createContext();

const ServiceProvider = ({children}) => {

  const [servicesState, setServicesState] = useState([]);

  useEffect(()=>{
    api.get('services')
    .then(response => setServicesState(response.data))
  },[])

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
    <ServiceContext.Provider value={{services}}>
      {children}
    </ServiceContext.Provider>
  )
}

function useService(){
  const context = useContext(ServiceContext)
  
  if(!context){
    throw new Error('UseBattery deve ser utilizado com o BatteryProvider')
  }

  return context;
}

export { ServiceProvider, useService };