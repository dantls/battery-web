import { useState } from 'react';
import { api } from '../../../services/api';
import { Container, Form } from "./styles";

export default function StatusUpdate({
  status, selectedStatus, setStatus, setIsEditing
}){
    const [name, setName] = useState(selectedStatus.name);
    
    const id = selectedStatus.id;

    async function handleUpdate(event){
        event.preventDefault();
          
        const itemStatus = {
          id,
          name
        }

        const itemUpdated = await api.put(`/status/${id}`, itemStatus );
        

        const itemsUpdated = status.map(item =>
          item.id !== itemUpdated.data.id ? item : itemUpdated.data,
        );

        setStatus([...itemsUpdated]);


        setIsEditing(false);
    }


    return ( 
       
        <Container>
          <Form onSubmit = {handleUpdate}>
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