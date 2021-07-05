import { useState,useEffect} from 'react';
import {api} from '../../../services/api';
import { Container, Form } from "./styles";

export default function DeviceUpdate({
  devices, selectedDevice, setDevices, setIsEditing
}){

    const id = selectedDevice.id;

    const [modelos ,setModelos] = useState([]);
    const [types ,setTypes] = useState([]);
    const [status ,setStatus] = useState([]);
    const [code ,setCode] = useState(selectedDevice.code);
    const [serie ,setSerie] = useState(selectedDevice.serie);
    const [purchase ,setPurchase] = useState(selectedDevice.purchase);
    const [choiseType ,setChoiseType] = useState(selectedDevice.types.name);
    const [choiseStatus ,setChoiseStatus] = useState(selectedDevice.status.name);
    const [choiseModel ,setChoiseModel] = useState(selectedDevice.modelos.name);

    useEffect(()=>{
      async function loadTypes(){
        const response = await api.get('/types');
         setTypes(response.data);
      }
      async function loadModels(){
        const response = await api.get('/models');
        setModelos(response.data);
       
      }
      async function loadStatus(){
        const response = await api.get('/status');
        setStatus(response.data);
       
      }
      loadTypes();
      loadStatus();
      loadModels();

  },[]);

   async function handleUpdate(event){
    event.preventDefault();
      
    const device = {
      code,
      purchase,
      "type_id":choiseType,
      "status_id":choiseStatus,
      "modelo_id":choiseModel,
      serie
    }

    const deviceUpdated = await api.put(`/devices/${id}`, device );
    

    const devicesUpdated = devices.map(device =>
      device.id !== deviceUpdated.data.id ? device : deviceUpdated.data,
    );


    setDevices([...devicesUpdated]);


    setIsEditing(false);


}

    return ( 
       
         <Container>
          <Form onSubmit = {handleUpdate}>
          <label htmlFor="code">Código do Equipamento* </label>
          <input 
            type="text" 
            id="code" 
            placeholder="Código do equipamento"
            value={code}
            onChange={event =>setCode(event.target.value)}
          />

            <label htmlFor="modelo">Modelo* </label>
            <select 
              value={choiseModel}
              disabled={!modelos.length }
              onChange={event =>setChoiseModel(event.target.value)}
            >
              <option
                value=''
                disabled
                hidden
              >
                Selecione o modelo:
              </option>
              {modelos.map((item)=>{return (
                  <option 
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                )})
              }  
            </select>   

            <label htmlFor="type">Tipo do Equipamento* </label>
            <select 
              value={choiseType}
              onChange={event =>setChoiseType(event.target.value)}
            >
              <option
                  value=''
                  disabled
                  hidden
              >
                  Selecione o tipo:
              </option>
             {types.map((item)=>{return (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>)})}
            </select>  

            <label htmlFor="type">Status do Equipamento* </label>
            <select 
              value={choiseStatus}
              onChange={event =>setChoiseStatus(event.target.value)}
            >
              <option
                  value=''
                  disabled
                  hidden
              >
                  Selecione o status:
              </option>
             {status.map((item)=>{return (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>)})}
            </select>  
           
            <label htmlFor="serie">Serie* </label>
            <input 
              type="text" 
              id="serie" 
              placeholder="Serie do equipamento"
              value={serie}
              onChange={event =>setSerie(event.target.value)}
            />
             <label htmlFor="purchase">Data da compra* </label>
            <input 
              type="date" 
              id="purchase" 
              value={purchase}
              onChange={event =>setPurchase(event.target.value)}
            />
            <button className= "btn"type="submit">Salvar</button>
    
          </Form>
        </Container>
    )

}