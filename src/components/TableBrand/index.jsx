import { Container } from './styles';

export function TableBrand({handleEdit, handleDelete,brands,setSelectedBrand}){

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
          {brands.map( item => (
            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.name}</td>        
              <td>
              <button
                  className="edit"
                  onClick={() => {
                    handleEdit(item.id)
                    setSelectedBrand(item)
                    }
                  }      
              >
                Editar
              </button>  
              <button
                  className="delete"
                  onClick={() => {
                    handleDelete(item.id)
                    setSelectedBrand(item)
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