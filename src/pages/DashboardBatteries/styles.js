import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 15px;
  margin: 32px auto;

  h1{
      margin-top: 40px;
      margin-bottom: 24px;
  }

  ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    li{
      display: flex;
      flex-direction: column;
      justify-content: center;

      background: #FFF;
      padding: 54px 24px 0px;
      border-radius: 8px;
      position: relative;

      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        strong{
          display: block;
          margin-right: 8px;
          color: #41414d;
        }

        &:first-child {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
     

      
    }

    button{
      position: absolute;
      background: #FFF;
      right: 15px;
      top: 15px;
      border: 0;
      transition: opacity 0.2s;
    }
    button:hover{
      opacity: 0.8;
    }
    strong{
      display: block;
      margin-bottom: 30px;
      color: #41414d;
    }

    p{
      color: #737380;
      line-height: 21px;
      font-size: 16px;
      margin-bottom: 30px
    }
  }

  @media(max-width:960px){
    ul{
      display: grid;
      grid-template-columns: 1fr ;
      list-style: none;

      li{



        div:last-child{
          display: flex;
          /* flex-direction: column; */
          /* align-items: center; */
        /* justify-content: center; */
        }
      }
    }

  }

`;
