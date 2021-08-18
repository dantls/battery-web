import React, { createContext , useState, useEffect, useContext} from 'react';
import Swal from 'sweetalert2';
import {api} from '../../services/api';


const BatteryContext = createContext();

const BatteryProvider = ({children}) => {
  const [batteries, setBatteries] = useState([]);
  
  useEffect(()=>{
    async function loadBatteries(){
      const response = await api.get(`/batteries`);
      setBatteries(response.data)
    }
    loadBatteries();
  },[])

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: "Você não poderá reverter essa ação!",
      showCancelButton: true,
      confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Não, não delete!'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Deletado!',
          text: `Deletado com sucesso.`,
          showConfirmButton: false,
          timer: 1500
        });

        api.delete(`/batteries/${id}`);
        
        setBatteries(batteries.filter(battery => battery.id !== id));
      }
    });
  };
  async function handleChargeBattery (id) {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: "Você não poderá reverter essa ação!",
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não, não!'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Carregando!',
          text: `Ação realizada com sucesso.`,
          showConfirmButton: false,
          timer: 1500
        });


         api.post(`/batteries-services/${id}`).then(
          batteryUpdated => {
            const batteriesUpdated = batteries.map(battery =>
              battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
            );
        
            setBatteries([...batteriesUpdated]);
          }
        );

        
      }
    });
  };
  async function handleFinishBatteryCharge (id) {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: "Você não poderá reverter essa ação!",
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não, não!'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Carregando!',
          text: `Ação realizada com sucesso.`,
          showConfirmButton: false,
          timer: 1500
        });


         api.post(`/batteries-full-charge/${id}`).then(
          batteryUpdated => {
            const batteriesUpdated = batteries.map(battery =>
              battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
            );
        
            setBatteries([...batteriesUpdated]);
          }
        );

        
      }
    });
  };


 


  return (
    <BatteryContext.Provider value={{
      batteries, 
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