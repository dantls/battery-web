import logo from '../../assets/logo.jpg';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';


export function Header({onPropsNewServiceModal}){
  return(
    <Container>
      <Content>
        <img src={logo} alt="bc" />
       
        <div id="links">
          <nav>
            <li><Link to="/devices">Dispositivo</Link></li>
            <li><Link to="/batteries">Bateria</Link></li>
            <li><Link to="/models">Modelo</Link></li>
            <li><Link to="/types">Tipo</Link></li>
            <li><Link to="/brands">Marca</Link></li>
            <li><Link to="/status">Status</Link></li>
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