import {useEffect , useState} from 'react';
import { api } from '../../services/api';

import {Container} from './styles';
import { TableService } from '../../components/TableService';

export function Service(){
  const [services, setServices] = useState([]);

  useEffect(()=>{
    api.get('services')
    .then(response => setServices(response.data))
  },[])
 
    return (  
      <Container>
        <TableService
          services={services}
        />
      </Container>
      
    )

}