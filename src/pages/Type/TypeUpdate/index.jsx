import { useState } from 'react';
import { api } from '../../../services/api';
import { Container, Form } from "./styles";

export default function TypeUpdate({
  types, selectedType, setTypes, setIsEditing
}){
    const [name, setName] = useState(selectedType.name);
    
    const id = selectedType.id;

    async function handleUpdate(event){
        event.preventDefault();
          
        const type = {
          id,
          name
        }

        const typeUpdated = await api.put('/types', type );
        

        const typesUpdated = types.map(type =>
          type.id !== typeUpdated.data.id ? type : typeUpdated.data,
        );

        setTypes([...typesUpdated]);


        setIsEditing(false);
    }


    return ( 
       
        <Container>
          <Form onSubmit = {handleUpdate}>
            <label htmlFor="name"> Tipo do equipamento * </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Tipo do equipamento"
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