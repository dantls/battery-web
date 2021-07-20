import { Container } from './styles';

export function TableBattery({
  handleEdit, 
  handleDelete,
  batteries,
  setSelectedBattery,
  charge
}){

  const formattedBatteries = batteries.map(item => {
    const battery = {
      ...item,
    
      formattedPurchase: new Date(item.purchase)
      .toISOString('pt-BR')
      .substring(0,10)
      .split('-')
      .reverse()
      .join('/')
    }
    
    return(
      battery
    )
  })
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Ident.</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>

          {formattedBatteries.map( item => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.code}</td>
            <td>{item.modelos.name}</td>
            <td>{item.types.name}</td>
            <td>{item.formattedPurchase}</td>
            <td>{item.status.name}</td>
            <td>
              <button
                  className="edit"
                  onClick={() => {
                    handleEdit(item.id)
                    setSelectedBattery(item)
                    }
                  }      
              >
                Editar
              </button>  
              <button
                  className="delete"
                  onClick={() => {
                    handleDelete(item.id)
                    setSelectedBattery(item)
                    }
                  }      
              >
                Delete
              </button>  
              <button
                  className="charge"
                  onClick={() => charge(item.id) }      
              >
                Carregar
              </button>  
              </td>        
            </tr>
          ))}
       
        </tbody>

      </table>
    </Container>
  )
}