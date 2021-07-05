import { Container } from './styles';

export function TableDevice({handleEdit, handleDelete,devices,setSelectedDevice}){

  const formattedDevices = devices.map(item => {
    const service = {
      ...item,
    
      "formattedPurchase": new Date(item.purchase).toLocaleString('pt-BR',{ 
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        })
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
            <th>Ident.</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>

          {formattedDevices.map( item => (
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
                    setSelectedDevice(item)
                    }
                  }      
              >
                Editar
              </button>  
              <button
                  className="delete"
                  onClick={() => {
                    handleDelete(item.id)
                    setSelectedDevice(item)
                    }
                  }      
              >
                Delete
              </button>  
              </td>        
            </tr>
          ))}
       
        </tbody>

      </table>
    </Container>
  )
}