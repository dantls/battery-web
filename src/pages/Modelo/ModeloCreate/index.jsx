import { useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {api} from '../../../services/api';
import { Container, Form } from "./styles";

export default function ModeloCreate(){
    const history = useHistory();
    const [brands ,setBrands] = useState([]);
    const [name ,setName] = useState('');
    const [choiseBrand ,setChoiseBrand] = useState('');

    useEffect(()=>{
      async function loadBrands(){
        const response = await api.get('brands');
        setBrands(response.data);
      }
      loadBrands();
    },[]);


    async function handleSubmit(event){
        event.preventDefault();
    
        await api.post('/models',{name, "brand_id":choiseBrand});

        history.push('/');
    }
    return ( 
       
         <Container>
          <Form onSubmit = {handleSubmit}>

            <label htmlFor="name"> Marca * </label>
            <select 
              value={choiseBrand}
              onChange={
                event =>{
                  setChoiseBrand(event.target.value)
                } 
              }> 
              <option
                value=''
                disabled
                hidden
              >
                  Selecione a marca:
              </option>
              {
                brands.map(
                  (item) => {
                    return (
                      <option 
                        value={item.id}
                        key={item.id}
                      >
                        {item.name}
                      </option>)
                  }
                )
              }
            </select>
         
            <label htmlFor="name"> Modelo * </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Modelo do equipamento"
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