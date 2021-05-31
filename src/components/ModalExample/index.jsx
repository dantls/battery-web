import Modal from 'react-modal';
import {useState} from 'react';

import {Container, ServiceTypeContainer,RadioBox} from './styles';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

Modal.setAppElement('#root');
export function ModalExample({isOpen,onRequestClose }){
  
  const [type, setType] = useState('income');

  function handleCreateNewService(event){
    event.preventDefault();
  }
  
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
      
        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />

        <ServiceTypeContainer>
          <RadioBox 
            type="button"
            onClick={()=>{ setType('income')}}
            isActive={type === 'income'}
            activeColor ="green"
          >
            <img 
              src={incomeImg}
              alt="Entrada"
            />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button"
            isActive={type === 'outcome'}
            onClick={()=>{ setType('outcome')}}
            activeColor ="red"

          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </ServiceTypeContainer>

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}