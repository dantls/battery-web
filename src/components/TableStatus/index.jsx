import { Container } from './styles';

export function TableStatus({handleEdit, handleDelete,status,setSelectedStatus}){

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {status.map( item => (
            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.name}</td>        
              <td>
              <button
                  className="edit"
                  onClick={() => {
                    handleEdit(item.id)
                    setSelectedStatus(item)
                    }
                  }      
              >
                Editar
              </button>  
              <button
                  className="delete"
                  onClick={() => {
                    handleDelete(item.id)
                    setSelectedStatus(item)
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