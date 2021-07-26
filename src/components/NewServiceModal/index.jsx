import Modal from 'react-modal';
import {useState, useEffect} from 'react';

import {Container} from './styles';

import closeImg from '../../assets/close.svg'
import { api } from '../../services/api';
import { useHistory } from 'react-router';
Modal.setAppElement('#root');
export function NewServiceModal({isOpen,onRequestClose }){

  const history = useHistory();
  
  const [devices ,setDevices] = useState([]);
  const [choiseDevice ,setChoiseDevice] = useState('');
  const [batteries ,setBatteries] = useState([]);
  const [choiseBattery ,setChoiseBattery] = useState('');


  async function handleCreateNewService(event){
       event.preventDefault();
       await api.post('/services',{
         "device_id": choiseDevice,
         "battery_id": choiseBattery,
       });

    history.push('/');
    onRequestClose()
  }

  useEffect(()=>{
    async function loadDevices(){
      const response = await api.get('/devices');
       setDevices(response.data);
    }
    
    async function loadBatteries(){
      const response = await api.get('/batteries');
       setBatteries(response.data);
    }
    
    loadDevices();
    loadBatteries();
    setChoiseDevice('');
    setChoiseBattery('');
    
  },[isOpen]);

  
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img 
          src={closeImg}
          alt="Fechar Modal"
        />

      </button>

      <Container onSubmit={handleCreateNewService}>
        <h2>Cadastrar</h2>
      
        <label htmlFor="modelo">Equipamento* </label>
        <select 
              value={choiseDevice}
              onChange={event => {
                setChoiseDevice(event.target.value)
                // models(event.target.value)
              }
              }>
              <option
                value=''
                disabled
                hidden
              >
                Selecione o dispositivo:
              </option>
              {devices.map((item)=>{
                return (
                 <option 
                 key={item.id}
                 value={item.id}>
                   {`${item.code} - ${item.types.name} - ${item.modelos.name}`}
                </option>
                )
              })}
          </select>

            <label htmlFor="modelo">Bateria* </label>
            <select 
              value={choiseBattery}
              onChange={event => {
                setChoiseBattery(event.target.value)
                // models(event.target.value)
              }
              }>
              <option
                value=''
                disabled
                hidden
              >
                Selecione a bateria:
              </option>
              {batteries.map((item)=>{
                return (
                 <option 
                 key={item.id}
                 value={item.id}>
                   {`${item.code} - ${item.types.name} - ${item.modelos.name}`}
                </option>
                )
              })}
            </select>

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}