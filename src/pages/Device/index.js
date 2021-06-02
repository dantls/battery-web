import { useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import {api} from '../../services/api';
import {Form,Container} from './styles';


 export function Device(){

    const history = useHistory();
    
    const [brand ,setBrand] = useState([]);
    const [modelo ,setModelo] = useState([]);
    const [type ,setType] = useState([]);
    const [status ,setStatus] = useState([]);
    const [code ,setCode] = useState('');
    const [serie ,setSerie] = useState('');
    const [purchase ,setPurchase] = useState('');
    const [choiseType ,setChoiseType] = useState('');
    const [choiseStatus ,setChoiseStatus] = useState('');
    const [choiseBrand ,setChoiseBrand] = useState('');
    const [choiseModel ,setChoiseModel] = useState('');
    useEffect(()=>{
      async function loadTypes(){
        const response = await api.get('/types');
         setType(response.data);
      }
      async function loadBrands(){
        const response = await api.get('/brands');
        setBrand(response.data);
       
      }
      async function loadStatus(){
        const response = await api.get('/status');
        setStatus(response.data);
       
      }

      loadBrands();
      loadTypes();
      loadStatus();

  },[]);


  async function models(brand){

    if(!brand){
      return;
    }
    const response = await api.get(`/${brand}/models`);

    setModelo(response.data)
  }

   async function handleSubmit(event){
       event.preventDefault();
       await api.post('/devices',{
         code,
         purchase,
         "type_id":choiseType,
         "status_id":choiseStatus,
         "modelo_id":choiseModel,
         "brand_id":choiseBrand,
         serie
       });
  
       history.push('/home');
    }
    return ( 
        <Container>
          <Form onSubmit = {handleSubmit}>
          <label htmlFor="code">Código do Equipamento* </label>
          <input 
            type="text" 
            id="code" 
            placeholder="Código do equipamento"
            value={code}
            onChange={event =>setCode(event.target.value)}
          />

            <label htmlFor="name">Marca* </label>
            <select 
              value={choiseBrand}
              onChange={event => {
                setChoiseBrand(event.target.value)
                models(event.target.value)
              }
              }>
              <option
                value=''
                disabled
                hidden
              >
                Selecione a marca:
              </option>
              {brand.map((item)=>{
                return (
                 <option 
                 key={item.id}
                 value={item.id}>
                   {item.name}
                </option>
                )
              })}
            </select>

            <label htmlFor="modelo">Modelo* </label>
            <select 
              value={choiseModel}
              disabled={!!choiseBrand}
              onChange={event =>setChoiseModel(event.target.value)}
            >
              <option
                value=''
                disabled
                hidden
              >
                Selecione o modelo:
              </option>
              {modelo.map((item)=>{return (
                  <option 
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                )})
              }  
            </select>   

            <label htmlFor="type">Tipo do Equipamento* </label>
            <select 
              value={choiseType}
              onChange={event =>setChoiseType(event.target.value)}
            >
              <option
                  value=''
                  disabled
                  hidden
              >
                  Selecione o tipo:
              </option>
             {type.map((item)=>{return (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>)})}
            </select>  

            <label htmlFor="type">Status do Equipamento* </label>
            <select 
              value={choiseStatus}
              onChange={event =>setChoiseStatus(event.target.value)}
            >
              <option
                  value=''
                  disabled
                  hidden
              >
                  Selecione o status:
              </option>
             {status.map((item)=>{return (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>)})}
            </select>  
           
            <label htmlFor="serie">Serie* </label>
            <input 
              type="text" 
              id="serie" 
              placeholder="Serie do equipamento"
              value={serie}
              onChange={event =>setSerie(event.target.value)}
            />
             <label htmlFor="purchase">Data da compra* </label>
            <input 
              type="date" 
              id="purchase" 
              value={purchase}
              onChange={event =>setPurchase(event.target.value)}
            />
            <button className= "btn"type="submit">Salvar</button>
    
          </Form>
        </Container>
        
        )

}
