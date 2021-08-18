import React from 'react';

import { RiCloseFill } from 'react-icons/ri';
import { Container } from './styles';
import { useBattery } from '../../hooks/battery';
import { useService } from '../../hooks/service';


export function DashboardServices() {
  const {services} = useService()
  const {handleChargeBattery} = useBattery()

  
  // const [incidents, setIncidents] = useState([]);

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
        {services.map(service => (
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
              

              
              <button  type="button"
                onClick={() => handleChargeBattery(service.battery_id)}
              >
                <RiCloseFill size={20} color="#a8a8b3"/>
              </button>
            </li>
          )
        )}         
       </ul>
    </Container>
  );
}
