import { Container } from './styles';

export function TableBrand({handleEdit,brands,setSelectedBrand}){

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
                  onClick={() => {
                    handleEdit(item.id)
                    setSelectedBrand(item)
                    }
                  }      
              >
                    Editar
                  </button>  
              </td>        
            </tr>
          ))}
        </tbody>

      </table>
    </Container>
  )
}