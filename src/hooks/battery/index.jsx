import React, { createContext , useState, useEffect, useContext, useCallback} from 'react';
// import Swal from 'sweetalert2';
import {api} from '../../services/api';
import { useServicesBattery } from '../../hooks/servicesBattery';
import { useService } from '../../hooks/service';
import { useHistory } from 'react-router-dom';

const BatteryContext = createContext();

const BatteryProvider = ({children}) => {
  const [batteries, setBatteries] = useState([]);
  

  const history = useHistory();

  const { loadServicesBatteries } = useServicesBattery()
  const { loadServices } = useService()

  const loadBatteries = useCallback(
    async() => {
      const response = await api.get(`batteries`);
      setBatteries(response.data)
    },
    [],
  );

  useEffect(()=>{
    loadBatteries();
  },[loadBatteries])


  

  const handleDelete = async (id) => {
    // Swal.fire({
    //   icon: 'warning',
    //   title: 'Você tem certeza?',
    //   text: "Você não poderá reverter essa ação!",
    //   showCancelButton: true,
    //   confirmButtonText: 'Sim, delete!',
    //   cancelButtonText: 'Não, não delete!'
    // }).then(result => {
    //   if (result.value) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Deletado!',
    //       text: `Deletado com sucesso.`,
    //       showConfirmButton: false,
    //       timer: 1500
    //     });

    //     api.delete(`/batteries/${id}`);
        
    //     setBatteries(batteries.filter(battery => battery.id !== id));

    //     history.push('/');
    //   }
    // });
    
    await api.delete(`batteries/${id}`);
        
    setBatteries(batteries.filter(battery => battery.id !== id));

    history.push('/');
  };
  async function handleChargeBattery (id) {
    // Swal.fire({
    //   icon: 'warning',
    //   title: 'Você tem certeza?',
    //   text: "Você não poderá reverter essa ação!",
    //   showCancelButton: true,
    //   confirmButtonText: 'Sim!',
    //   cancelButtonText: 'Não, não!'
    // }).then(result => {
    //   if (result.value) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Carregando!',
    //       text: `Ação realizada com sucesso.`,
    //       showConfirmButton: false,
    //       timer: 1500
    //     });


    //      api.post(`/batteries-services/${id}`).then(
    //       batteryUpdated => {
    //         const batteriesUpdated = batteries.map(battery =>
    //           battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
    //         );
      
    //         setBatteries([...batteriesUpdated]);
    //       }
    //     );
    //     loadServicesBatteries();
    //     loadServices();
    //     history.push('/');
    //   }
    // });

      // Swal.fire({
    //   icon: 'warning',
    //   title: 'Você tem certeza?',
    //   text: "Você não poderá reverter essa ação!",
    //   showCancelButton: true,
    //   confirmButtonText: 'Sim!',
    //   cancelButtonText: 'Não, não!'
    // }).then(result => {
    //   if (result.value) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Carregando!',
    //       text: `Ação realizada com sucesso.`,
    //       showConfirmButton: false,
    //       timer: 1500
    //     });


    //      api.post(`/batteries-services/${id}`).then(
    //       batteryUpdated => {
    //         const batteriesUpdated = batteries.map(battery =>
    //           battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
    //         );
      
    //         setBatteries([...batteriesUpdated]);
    //       }
    //     );
    //     loadServicesBatteries();
    //     loadServices();
    //     history.push('/');
    //   }
    // });
    api.post(`batteries-services/${id}`).then(
      batteryUpdated => {
        const batteriesUpdated = batteries.map(battery =>
          battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
        );
  
        setBatteries([...batteriesUpdated]);
      }
    );
    loadServicesBatteries();
    loadServices();
    history.push('/');
  };
  async function handleFinishBatteryCharge (id) {
    // Swal.fire({
    //   icon: 'warning',
    //   title: 'Você tem certeza?',
    //   text: "Você não poderá reverter essa ação!",
    //   showCancelButton: true,
    //   confirmButtonText: 'Sim!',
    //   cancelButtonText: 'Não, não!'
    // }).then(result => {
    //   if (result.value) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Carregando!',
    //       text: `Ação realizada com sucesso.`,
    //       showConfirmButton: false,
    //       timer: 1500
    //     });


    //      api.post(`/batteries-full-charge/${id}`).then(
    //       batteryUpdated => {
    //         const batteriesUpdated = batteries.map(battery =>
    //           battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
    //         );
        
    //         setBatteries([...batteriesUpdated]);
    //       }
    //     );

    //     loadServicesBatteries();
    //     loadServices();
    //     history.push('/');
    //   }
    // });

    
    api.post(`batteries-full-charge/${id}`).then(
      batteryUpdated => {
        const batteriesUpdated = batteries.map(battery =>
          battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
        );
    
        setBatteries([...batteriesUpdated]);
      }
    );

    loadServicesBatteries();
    loadServices();
    history.push('/');
  };


 


  return (
    <BatteryContext.Provider value={{
      batteries, 
      loadBatteries,
      handleChargeBattery, 
      handleDelete,
      handleFinishBatteryCharge
    }}>
      {children}
    </BatteryContext.Provider>
  )
}

function useBattery(){
  const context = useContext(BatteryContext)
  
  if(!context){
    throw new Error('UseBattery deve ser utilizado com o BatteryProvider')
  }

  return context;
}

export { BatteryProvider, useBattery };