import React, {  useCallback, useState } from 'react';
import * as Yup from 'yup';

import { Link
  , useHistory 
} from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.jpg';

import { useToast } from '../../hooks/toast';
// import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background, AnimationContainer } from './styles';
import { useAuth } from '../../hooks/auth';

export const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
     try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail Obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória.'),
        });
        await schema.validate({email, password}, {
          abortEarly: false,
        });

        await signIn({
          email,
          password
        });

        history.push('/batteries/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {

          // const errors = getValidationErrors(error);
         
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verifique as credenciais.',
        });
         
      }
    },
    [ email, password , history, signIn,addToast],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="" />

          <form onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>
            <input 
              name="email" 
              onChange={(event) =>{ setEmail(event.target.value)}}
              placeholder="E-mail" 
            />
            <input
              name="password"
              type="password"
              onChange={(event) => {setPassword(event.target.value)}}

              placeholder="Senha"
            />
            <button type="submit">Entrar</button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;