import { useState} from 'react';
import { useHistory } from 'react-router';
import {api} from '../../services/api';
import {Form,Container} from './styles';


export function Status(){
    const history = useHistory();
    const [name ,setName] = useState('');
    
  
    async function handleSubmit(event){
      event.preventDefault();
      
      await api.post('/status', {  name });

      history.push('/home');
    }
    return (  
      <Container>
        <Form onSubmit = {handleSubmit}>
          <label htmlFor="name"> Status * </label>
          <input 
            type="text" 
            id="name" 
          placeholder="Status"
          value={name}
          onChange={event => setName(event.target.value)}
          />
      
  
          <button className= "btn"type="submit">Salvar</button>
  
  
        </Form>
      </Container>
      
    )

}