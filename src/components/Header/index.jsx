import logo from '../../assets/logo.jpg';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/modal';
import { NewServiceModal } from "../../components/NewServiceModal";
// /components/NewServiceModal


export function Header(){
  const {handleOpenNewServiceModal} = useModal();


  return(
    <>
    <Container>
      
      <Content>
      <Link to="/services/dashboard">
        <img src={logo} alt="bc" />
      </Link>
       
        <div id="links">
          <nav>
            <li><Link to="/devices/dashboard">Dispositivo</Link></li>
            <li><Link to="/batteries/dashboard">Bateria</Link></li>
            <li><Link to="/services/dashboard">Serviços</Link></li>
          </nav>
          <button 
            type="button"
            onClick={handleOpenNewServiceModal}
          >
            Novo serviço
          </button> 
        </div>
       
      </Content>
    </Container>
    <NewServiceModal/>
    </>
  )
}