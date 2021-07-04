import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { Container, Form } from "./styles";

export default function ModeloUpdate({
  modelos, selectedModelo, setModelos, setIsEditing
}){
    
    const [brands ,setBrands] = useState([]);
    const [name, setName] = useState(selectedModelo.name);
    const [choiseBrand ,setChoiseBrand] = useState(selectedModelo.brand.id);
    
    const id = selectedModelo.id;


    useEffect(() =>{
      async function loadBrands(){
        const response = await api.get('brands');
        setBrands(response.data);
      }
      loadBrands();
    },[]);
    

    async function handleUpdate(event){
        event.preventDefault();
          
        const modelo = {
          name,
          brand_id: choiseBrand
        }

        const modeloUpdated = await api.put(`/models/${id}`, modelo );
        

        const modelosUpdated = modelos.map(modelo =>
          modelo.id !== modeloUpdated.data.id ? modelo : modeloUpdated.data,
        );


        setModelos([...modelosUpdated]);


        setIsEditing(false);


    }


    return ( 
       
        <Container>
          <Form onSubmit = {handleUpdate}>

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



            <label htmlFor="Modelo"> Modelo * </label>
            <input 
              type="text" 
              id="modelo" 
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