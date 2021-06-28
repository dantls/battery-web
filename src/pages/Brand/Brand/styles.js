import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  button{
    border: 0;
   
    height:3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const Form = styled.form`
  max-width: 20rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  button[type="submit"]{
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