import React, { useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import {api} from '../../services/api';
import {Form, Container} from './styles';

 export function Modelo(){
    const history = useHistory();  

    const [brand ,setBrand] = useState([]);
    const [modelo ,setModelo] = useState('');
    const [choiseBrand ,setChoiseBrand] = useState('');

    useEffect(()=>{
      async function loadBrands(){
        const response = await api.get('brands');
        setBrand(response.data);
      }
      loadBrands();
  },[]);

  
   async function handleSubmit(event){
      event.preventDefault();

      await api.post('/models',{"name":modelo, "brand_id":choiseBrand});


      history.push('/home');
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
                brand.map(
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
          
            <label htmlFor="Modelo"> Modelo * </label>
            <input 
              type="text" 
              id="modelo" 
              placeholder="Modelo do equipamento"
              value={modelo}
              onChange={event =>{
                setModelo(event.target.value)
              }
              }
            />
            <button className="btn"type="submit">Salvar</button>
    
          </Form>
        </Container>
        
        )

}