import React, {useState,useEffect} from 'react';
import { FiTrash2} from 'react-icons/fi';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';

import {useHistory} from 'react-router-dom';

import { Container } from './styles';

import { api} from '../../services/api';

export function DashboardServices() {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    api.get('services')
    .then(response => setServices(response.data))
  },[])

  const formattedServices = services.map(item => {
    let passed = new Date(item.initial_date);

    let elapsed = formatDistanceToNow(
      passed,
      {
        locale: ptBR,
      }
    )


    const service = {
      ...item,
      
      "initial_date": new Date(item.initial_date).toLocaleString('pt-BR',{ 
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour: 'numeric',
        minute: '2-digit' }),
      elapsed 
    }
    
    return(
      service
    )
  })
  
  // const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  // const ongName = localStorage.getItem('ongName');
  // const ongId = localStorage.getItem('ongId');

  // useEffect(() => {
  //   api.get('profile', {
  //     headers:{
  //       Authorization:ongId,
  //     }
  //   }).then(response =>{
  //     setIncidents(response.data);
  //   })

  // }, [ongId]);

  // async function handleDeleteIncident(id)
  // {
  //   try {
  //     await api.delete(`incidents/${id}`,{
  //       headers:{
  //         Authorization: ongId,
  //       }
  //     });

  //     setIncidents(incidents.filter(incident => incident.id !== id));

  //   } catch (error) {
  //     alert('Erro ao deletar caso, tente novamente');
  //   }
  // }

  // function handleLogout(){
  //   localStorage.clear();
  //   history.push('/');
  // }

  return (
    <Container>
       <h1>Serviços em andamento</h1>

       <ul>
        {formattedServices.map(service => (
            <li key={service.id}>
              <div>
                <div>
                  <strong>Dispositivo: </strong>
                  <p>{service.devices.code}</p>
                </div>
                <div>
                  <strong>Bateria: </strong>
                  <p>{service.batteries.code}</p>
                </div>
              </div>
              <div>
                <strong>Data Inicial: </strong>
                <p>{service.initial_date}</p>
              </div>
            
              <div>
                <strong>Tempo de uso: </strong>
                <p>{service.elapsed}</p>
              </div>
              <div>
                <strong>Status: </strong>
                <p>{service.status.name}</p>
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
