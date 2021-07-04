import { Container } from './styles';

export function TableModelo({handleEdit, handleDelete,modelos,setSelectedModelo}){

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Fabricante</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {modelos.map( item => (
            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.brand.name}</td>

              <td>
                <button
                    className="edit"
                    onClick={() => {
                      handleEdit(item.id)
                      setSelectedModelo(item)
                      }
                    }      
                >
                  Editar
                </button>  
                <button
                    className="delete"
                    onClick={() => {
                      handleDelete(item.id)
                      setSelectedModelo(item)
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