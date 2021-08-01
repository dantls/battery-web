import React, {useState,useEffect} from 'react';
import { 
  RiBattery2ChargeLine ,
  RiBattery2Fill,
  RiBatteryShareFill,
  RiBattery2Line} from 'react-icons/ri';

import { Container } from './styles';

import { api} from '../../services/api';
import { formatDateElapsed } from '../../utils/formatDateElapsed';
import { formatDate } from '../../utils/formatDate';

export function DashboardBatteries() {
  const [servicesBattery, setServicesBattery] = useState([]);

  // async function handleChargeBattery (id) {
  //   Swal.fire({
  //     icon: 'warning',
  //     title: 'Você tem certeza?',
  //     text: "Você não poderá reverter essa ação!",
  //     showCancelButton: true,
  //     confirmButtonText: 'Sim!',
  //     cancelButtonText: 'Não, não!'
  //   }).then(result => {
  //     if (result.value) {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Carregando!',
  //         text: `Ação realizada com sucesso.`,
  //         showConfirmButton: false,
  //         timer: 1500
  //       });

  //        api.post(`/batteries-services/${id}`).then(
  //         batteryUpdated => {
  //           const batteriesUpdated = batteries.map(battery =>
  //             battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
  //           );
        
  //           setBatteries([...batteriesUpdated]);
    
  //         }
  //       );

        
  //     }
  //   });
  // };

  useEffect(()=>{
    api.get('batteries-services')
    .then(response => setServicesBattery(response.data))
  },[])

  let elapsedDateBatteryService;
  let elapsedDateService;

  const formattedServicesBattery = servicesBattery.map(item => {

    if(item.initial_date_battery_service){
      let passedDateBatteryService = new Date(item.initial_date_battery_service);
      elapsedDateBatteryService = formatDateElapsed(passedDateBatteryService)
    }
    if(item.initial_date_service){
      let passedDateService = new Date(item.initial_date_service);
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
    <Container>
       <h1>Baterias</h1>

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
              
              {
                ( (service.status === 'Carregada') 
                  ?
                    <button  type="button">
                    <RiBattery2Fill size={20} color="#a8a8b3"/>
                    </button>
                  : <></>
                )
              }
              {
                ( (service.status === 'Carregando') 
                  ?
                    <button  type="button">
                    <RiBattery2ChargeLine size={20} color="#a8a8b3"/>
                    </button>
                  : <></>
                )
              }
              {
                ( (service.status === 'Em uso') 
                  ?
                    <button  type="button">
                    <RiBatteryShareFill size={20} color="#a8a8b3"/>
                    </button>
                  : <></>
                )
              }
              {
                ( (service.status === 'Aguardando') 
                  ?
                    <button  type="button">
                    <RiBattery2Line size={20} color="#a8a8b3"/>
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
