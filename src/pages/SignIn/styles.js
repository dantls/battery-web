import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 700px;
`;

const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${apperFromLeft} 1s;
  
  form {
    display: flex;
    flex-direction: column;
    margin: 70px 0px;
    width: 340px;
    background-color: '#FFF';
    text-align: center;
    input{
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;

      border: 1px solid var(--input-border);
      background-color: var(--input-color);

      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: var(--text-body)
      }

      & + input {
        margin-top: 1rem;
      }
    }
    button{
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: var(--shape);
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
    }
    h1 {
      margin-bottom: 20px;
    }
    a {
      color: #000000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#000000')};
      }
    }
  }
  > a {
    display: flex;
    align-items: center;
    color: #000000;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#444444')};
    }
    svg {
      margin-right: 10px;
    }
  }
  > img {
    height: 80px;
  }
`;
export const Background = styled.div`
  flex: 1;
  margin-left: -100px;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;