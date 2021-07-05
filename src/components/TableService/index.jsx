import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';
import { Container } from './styles';

export function TableService({services}){

  const formattedServices = services.map(item => {
    let passed = new Date(item.initial_date);

    let elapsed = formatDistanceToNow(
      passed,
      {
        locale: ptBR,
      }
    )


    const service = {
      ...item,
      
      "initial_date": new Date(item.initial_date).toLocaleString('pt-BR',{ 
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour: 'numeric',
        minute: '2-digit' }),
      elapsed 
    }
    
    return(
      service
    )
  })

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Equipamento</th>
            <th>Bateria</th>
            <th>Data Inicial</th>
            <th>Tempo de uso</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {formattedServices.map( item => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.devices.code}</td>
            <td>{item.batteries.code}</td>
            <td>
              {/* {new Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.initial_date))
              } */}
              {item.initial_date}

              {/* {
              new Date(item.initial_date).toLocaleString('pt-BR',{ 
                day:"2-digit",
                month:"2-digit",
                year:"numeric",
                hour: 'numeric',
                minute: '2-digit' })} */}
            </td>


            <td>{item.elapsed}</td>
            <td>{item.status.name}</td>
            </tr>
          ))}
         
        
        </tbody>

      </table>
    </Container>
  )
}