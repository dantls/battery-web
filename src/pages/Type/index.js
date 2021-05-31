import { useState} from 'react';
import { useHistory } from 'react-router';
import {api} from '../../services/api';
import {Form,Container} from './styles';


export function Type(){
    const history = useHistory();
    const [name ,setName] = useState('');
    
  
    async function handleSubmit(event){
      event.preventDefault();
      
      await api.post('/types', {  name });

      history.push('/home');
    }
    return (  
      <Container>
        <Form onSubmit = {handleSubmit}>
          <label htmlFor="name"> Tipo de equipamento * </label>
          <input 
            type="text" 
            id="name" 
          placeholder="Tipo do equipamento"
          value={name}
          onChange={event => setName(event.target.value)}
          />
      
  
          <button className= "btn"type="submit">Salvar</button>
  
  
        </Form>
      </Container>
      
    )

}