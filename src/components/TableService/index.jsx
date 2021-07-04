
import { Container } from './styles';

export function TableService({services}){

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Equipamento</th>
            <th>Bateria</th>
            <th>Data Inicial</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {services.map( item => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.devices.code}</td>
            <td>{item.batteries.code}</td>
            <td>
              {/* {new Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.initial_date))
              } */}
              {new Date(item.initial_date).toLocaleString('pt-BR')}
            </td>
            <td>{item.status.name}</td>
            </tr>
          ))}
         
        
        </tbody>

      </table>
    </Container>
  )
}