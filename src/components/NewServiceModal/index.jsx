import Modal from 'react-modal';
import {useState, useEffect} from 'react';

import {Container} from './styles';

import closeImg from '../../assets/close.svg'
import { api } from '../../services/api';
Modal.setAppElement('#root');
export function NewServiceModal({isOpen,onRequestClose }){
  
  const [devices ,setDevices] = useState([]);
  const [choiseDevice ,setChoiseDevice] = useState('');
  const [batteries ,setBatteries] = useState([]);
  const [choiseBatteries ,setChoiseBatteries] = useState('');


  function handleCreateNewService(event){
    event.preventDefault();
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
  },[]);
  
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
                   {item.name}
                </option>
                )
              })}
          </select>

            <label htmlFor="modelo">Bateria* </label>
            <select 
              value={choiseBatteries}
              onChange={event => {
                setChoiseBatteries(event.target.value)
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
                   {item.name}
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