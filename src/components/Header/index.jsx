import logo from '../../assets/logo.jpg';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';


export function Header({onPropsNewServiceModal }){
  return(
    <Container>
      <Content>
      <Link to="/">
        <img src={logo} alt="bc" />
      </Link>
       
        <div id="links">
          <nav>
            <li><Link to="/devices/view">Dispositivo</Link></li>
            <li><Link to="/batteries/view">Bateria</Link></li>
            <li><Link to="/models/view">Modelo</Link></li>
            <li><Link to="/types/view">Tipo</Link></li>
            <li><Link to="/brands/view">Marca</Link></li>
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