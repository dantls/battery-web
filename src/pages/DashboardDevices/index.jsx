import React, {useState,useEffect} from 'react';

import { Container } from './styles';

import { api} from '../../services/api';

export function DashboardDevices() {
  const [devices, setDevices] = useState([]);

  useEffect(()=>{
    async function loadDevices(){
      const response = await api.get(`/devices`);
      setDevices(response.data)
    }
    loadDevices();
  },[])

  const formattedDevices = devices.map(item => {
    
    const device = {
      ...item,
    
      formattedPurchase: new Date(item.purchase)
      .toISOString('pt-BR')
      .substring(0,10)
      .split('-')
      .reverse()
      .join('/')
      
    }
    return (device)
  })

  return (
    <Container>
       <h1>Equipamentos</h1>

       <ul>
        {formattedDevices.map(device => (
            <li key={device.id}>
              <div>
                <div>
                  <strong>Equipamento: </strong>
                  <p>{device.code}</p>
                </div>
                <div>
                  <strong>Status: </strong>
                  <p>{device.status.name}</p>
                </div>
              </div>
            
              <div>
                <strong>Modelo: </strong>
                <p>{device.types.name }</p>
              </div>

              <div>
                <strong>Modelo: </strong>
                <p>{device.modelos.name }</p>
              </div>
              
              <div>
                <strong>Data de compra: </strong>
                <p>{device.formattedPurchase}</p>
              </div> 
          
            </li>
          )
        )}         
       </ul>
    </Container>
  )
}
