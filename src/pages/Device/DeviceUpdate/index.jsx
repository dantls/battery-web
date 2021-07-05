import { Container} from "./styles";
import {TableDevice} from '../../../components/TableDevice';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import Swal from 'sweetalert2';

import { BsPlusCircle} from "react-icons/bs";

// import DeviceCreate from '../DeviceCreate';
// import DeviceUpdate from '../DeviceUpdate';

export default function DeviceView(){

  const [devices, setDevices] = useState([]);
  // const [modelos, setModelos] = useState([]);
  // const [brands ,setBrands] = useState([]);
  // const [types ,setTypes] = useState([]);
  // const [status ,setStatus] = useState([]);

  const [selectedDevice, setSelectedDevice] = useState(null);
  // const [selectedModelo, setSelectedModelo] = useState(null);
  // const [selectedType, setSelectedType] = useState(null);
  // const [selectedBrand, setSelectedBrand] = useState(null);
  // const [selectedStatus, setSelectedStatus] = useState(null);

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    async function loadDevices(){
      const response = await api.get(`/devices`);
      setDevices(response.data)
    }
    // async function loadModelos(){
    //   const response = await api.get(`/models`);
    //   setModelos(response.data)
    // }
    // async function loadTypes(){
    //   const response = await api.get('/types');
    //   setType(response.data);
    // }
    // async function loadBrands(){
    //   const response = await api.get('/brands');
    //   setBrand(response.data);
    // }
    // async function loadStatus(){
    //   const response = await api.get('/status');
    //   setStatus(response.data);
    // }

    // loadBrands();
    // loadTypes();
    // loadStatus();
    // loadModelos();
    loadDevices();
  },[])

  const handleEdit = id => {
    const [device] = devices.filter(device => device.id === id);
    setSelectedDevice(device);
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

        api.delete(`/devices/${id}`);
        
        setDevices(devices.filter(device => device.id !== id));
      }
    });
  };
  
  
    return ( 
      <Container>
        {!isAdding && !isEditing && (
          <>
            <TableDevice
              devices={devices}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setSelectedDevice={setSelectedDevice}
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
            <DeviceCreate
              devices={devices}
              setDevices={setDevices}
              setIsAdding={setIsAdding}
            />
          )
        }
        {isEditing && (
            <DeviceUpdate
              devices={devices}
              selectedDevice={selectedDevice}
              setDevices={setDevices}
              setIsEditing={setIsEditing}
            />
          )
        }
      </Container>
    )

}