import logo from '../../assets/logo.jpg';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';


export function Header({onPropsNewServiceModal }){
  return(
    <Container>
      <Content>
      <Link to="/services/dashboard">
        <img src={logo} alt="bc" />
      </Link>
       
        <div id="links">
          <nav>
            <li><Link to="/devices/view">Dispositivo</Link></li>
            <li><Link to="/batteries/dashboard">Bateria</Link></li>
            <li><Link to="/services/dashboard">Serviços</Link></li>
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