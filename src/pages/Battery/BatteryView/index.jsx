import { Container} from "./styles";
import {TableBattery} from '../../../components/TableBattery';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import Swal from 'sweetalert2';

import { BsPlusCircle} from "react-icons/bs";

import BatteryCreate from '../BatteryCreate';
import BatteryUpdate from '../BatteryUpdate';

export default function BatteryView(){

  const [batteries, setBatteries] = useState([]);
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    async function loadBatteries(){
      const response = await api.get(`/batteries`);
      setBatteries(response.data)
    }
    loadBatteries();
  },[])

  const handleEdit = id => {
    const [battery] = batteries.filter(battery => battery.id === id);
    setSelectedBattery(battery);
    setIsEditing(true);
  };
  
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
  
  
    return ( 
      <Container>
        {!isAdding && !isEditing && (
          <>
            <TableBattery
              batteries={batteries}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setSelectedBattery={setSelectedBattery}
              charge={handleChargeBattery}
            />
            <button onClick={() => setIsAdding(true)}>
              <BsPlusCircle
                size="25"
                color="black"
              />
            </button> 
          </> 
          )
        }
        {isAdding && (
            <BatteryCreate
              batteries={batteries}
              setBatteries={setBatteries}
              setIsAdding={setIsAdding}
            />
          )
        }
        {isEditing && (
            <BatteryUpdate
              batteries={batteries}
              selectedBattery={selectedBattery}
              setBatteries={setBatteries}
              setIsEditing={setIsEditing}
            />
          )
        }
      </Container>
    )

}