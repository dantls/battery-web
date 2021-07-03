import { Container } from './styles';

export function TableType({handleEdit, handleDelete,types,setSelectedType}){

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
          {types.map( item => (
            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.name}</td>        
              <td>
              <button
                  className="edit"
                  onClick={() => {
                    handleEdit(item.id)
                    setSelectedType(item)
                    }
                  }      
              >
                Editar
              </button>  
              <button
                  className="delete"
                  onClick={() => {
                    handleDelete(item.id)
                    setSelectedType(item)
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