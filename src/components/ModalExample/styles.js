import styled from 'styled-components';
import {darken, transparentize} from 'polished';

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
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

`;

export const ServiceTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;


`;

export const RadioBox = styled.button`
   height: 4rem;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;

    background: ${({isActive, activeColor}) => isActive 
      ? transparentize(0.8, colors[activeColor])
      : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover{
      border-color: ${darken(0.15, '#d7d7d7')}
    }

    img{
      width: 1.3rem;
      height: 1.3rem;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);

    }



`;