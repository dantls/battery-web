import Modal from 'react-modal';
import {useState, useEffect} from 'react';

import {Container} from './styles';

import closeImg from '../../assets/close.svg'
import { api } from '../../services/api';
import { useHistory } from 'react-router';
import { useModal } from '../../hooks/modal';
Modal.setAppElement('#root');

export function NewServiceModal(){
  const {isNewServiceModalOpen , handleCloseNewServiceModal} = useModal()

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
    handleCloseNewServiceModal()
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
    
  },[]);

  
  return(
    <Modal
      isOpen={isNewServiceModalOpen}
      onRequestClose={handleCloseNewServiceModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={handleCloseNewServiceModal}
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