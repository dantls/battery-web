import React, {useState,useEffect} from 'react';
import { FiTrash2} from 'react-icons/fi';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';

import {useHistory} from 'react-router-dom';

import { Container } from './styles';

import { api} from '../../services/api';

export function DashboardBatteries() {
  const [servicesBattery, setServicesBattery] = useState([]);

  useEffect(()=>{
    api.get('batteries-services')
    .then(response => setServicesBattery(response.data))
  },[])

  let elapsedDateBatteryService;
  let elapsedDateService;

  const formattedServicesBattery = servicesBattery.map(item => {

    if(item.initial_date_battery_service){
      let passedDateBatteryService = new Date(item.initial_date_battery_service);

      elapsedDateBatteryService = formatDistanceToNow(
        passedDateBatteryService,
        {
          locale: ptBR,
        }
      )
    }
    if(item.initial_date_service){
      let passedDateService = new Date(item.initial_date_service);

      elapsedDateService = formatDistanceToNow(
        passedDateService,
        {
          locale: ptBR,
        }
      )
    }



    const service = {
      ...item,
      
      "initial_date_service": item.initial_date_service ? new Date(item.initial_date_service).toLocaleString('pt-BR',{ 
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour: 'numeric',
        minute: '2-digit' }) : null,
        
        elapsedDateService ,

      "initial_date_battery_service": item.initial_date_battery_service ? new Date(item.initial_date_battery_service).toLocaleString('pt-BR',{ 
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour: 'numeric',
        minute: '2-digit' }) : null,

      
      elapsedDateBatteryService

    }
    
    return(
      service
    )
  })


  return (
    <Container>
       <h1>Baterias carregando</h1>

       <ul>
        {formattedServicesBattery.map(service => (
            <li key={service.id}>
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
              <div>
                <strong>Status: </strong>
                <p>{service.status }</p>
              </div>
              

           
              <button  type="button">
                <FiTrash2 size={20} color="#a8a8b3"/>
              </button>
            </li>
          )
        )}         
       </ul>
    </Container>
  );
}
