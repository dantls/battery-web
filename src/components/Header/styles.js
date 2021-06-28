import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  margin-bottom: 2rem;

`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #FFFFFF;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height:3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }

   
  }

  div{
    display: flex;
    align-items: center;
  }
  nav{
      

      display: flex;
      list-style: none;
      margin-right: 1.5rem;
      a{
        display: block;
        padding: 1rem;
        text-decoration: none;
        color: var(--shape);

      }
      /* li{
        position: relative;
      }

      li ul{
        position:absolute;
        top:30px;
        left:0;
        display:none;
      }
      li:hover ul, li.over ul{
        display:block;
      }

      li ul li{
        display:block;
      } */

  }

  @media(max-width:820px){
    nav{
      display: none;
     
    }
  }
`;