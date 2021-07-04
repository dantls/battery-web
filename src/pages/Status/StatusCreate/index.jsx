import { useState} from 'react';
import { useHistory } from 'react-router-dom';
import {api} from '../../../services/api';
import { Container, Form } from "./styles";

export default function StatusCreate(){
    const history = useHistory();
    const [name ,setName] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        await api.post('/status', {
           name 
        });
        history.push('/');
    }
    return ( 
       
        <Container>
          <Form onSubmit = {handleSubmit}>
            <label htmlFor="name"> Status * </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Situação"
              value={name}
              onChange={event => {
                  setName(event.target.value)
                }
              }
            />
        
    
            <button className= "btn"type="submit">Salvar</button>
    
    
          </Form>
        </Container>
    )

}