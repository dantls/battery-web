import logo from '../../assets/logo.jpg';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';


export function Header({onPropsNewServiceModal,setIsAdding }){
  return(
    <Container>
      <Content>
        <img src={logo} alt="bc" />
       
        <div id="links">
          <nav>
            <li><Link to="/devices/view">Dispositivo</Link></li>
            <li><Link to="/batteries">Bateria</Link></li>
            <li><Link to="/models/view">Modelo</Link></li>
            <li><Link to="/types/view">Tipo</Link></li>
            <li><Link to="/brands/view">Marca</Link>
              {/* <ul>
                <li>
                  <button onClick={() => setIsAdding(true)}>Novo</button>
                </li>
              </ul> */}
            </li>
            <li><Link to="/status/view">Status</Link></li>
            <li><Link to="/services">Serviços</Link></li>
          </nav>
          <button 
            type="button"
            onClick={onPropsNewServiceModal}
          >
            Novo serviço
          </button> 
        </div>
       
      </Content>
    </Container>
  )
}