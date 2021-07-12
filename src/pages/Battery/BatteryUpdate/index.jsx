import { useState,useEffect} from 'react';
import {api} from '../../../services/api';
import { Container, Form } from "./styles";

export default function BatteryUpdate({
  batteries, selectedBattery, setBatteries, setIsEditing
}){
    const id = selectedBattery.id;

    const [modelos ,setModelos] = useState([]);
    const [types ,setTypes] = useState([]);
    const [status ,setStatus] = useState([]);
    const [code ,setCode] = useState(selectedBattery.code);
    const [purchase ,setPurchase] = useState(String(selectedBattery.purchase).substring(0,10));
    const [choiseType ,setChoiseType] = useState(selectedBattery.types.id);
    const [choiseStatus ,setChoiseStatus] = useState(selectedBattery.status.id);
    const [choiseModel ,setChoiseModel] = useState(selectedBattery.modelos.id);

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

      
    const battery = {
      code,
      purchase,
      "type_id":choiseType,
      "status_id":choiseStatus,
      "modelo_id":choiseModel,
    }

    const batteryUpdated = await api.put(`/battery/${id}`, battery );
    

    const batteriesUpdated = batteries.map(battery =>
      battery.id !== batteryUpdated.data.id ? battery : batteryUpdated.data,
    );

    setBatteries([...batteriesUpdated]);
    setIsEditing(false);
}

    return ( 
       
         <Container>
          <Form onSubmit = {handleUpdate}>
          <label htmlFor="code">Código da Bateria* </label>
          <input 
            type="text" 
            id="code" 
            placeholder="Código da Bateria"
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