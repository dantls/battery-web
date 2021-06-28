import { useState } from 'react';
import { api } from '../../../services/api';
import { Container, Form } from "./styles";

export default function BrandUpdate({
  brands, selectedBrand, setBrands, setIsEditing
}){
    const [name, setName] = useState(selectedBrand.name);
    
    const id = selectedBrand.id;

    async function handleUpdate(event){
        event.preventDefault();
          
        const brand = {
          id,
          name
        }

        const brandUpdated = await api.put('/brands', brand );
        

        const brandsUpdated = brands.map(brand =>
          brand.id !== brandUpdated.data.id ? brand : brandUpdated.data,
        );

        setBrands([...brandsUpdated]);


        setIsEditing(false);
    }


    return ( 
       
        <Container>
          <Form onSubmit = {handleUpdate}>
            <label htmlFor="name"> Marca * </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Marca do equipamento"
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