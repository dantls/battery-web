import styled from 'styled-components';

export const Container = styled.div`
  
  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td{
      padding: 1rem 2rem;
      border:0;
      background-color: var(--shape);
      color: var(--text-body);
      border-radius: 0rem;

      &:first-child{
        border-radius: 0.25rem 0 0 0.25rem;
        color: var(--text-title);
      }
      &:last-child{
        border-radius: 0 0.25rem 0.25rem 0 ;
        color: var(--text-title);
      }
    }
  }
  .delete{
    font-size: 0.8rem;
    color: #FFFFFF;
    background-color: var(--red);
    border: 0;
    padding: 0.6rem;
    border-radius: 0.25rem;
    height:2.5rem;
    margin-right: 0.2rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
  .edit{
    font-size: 0.8rem;
    color: #FFFFFF;
    background-color: var(--green);
    border: 0;
    padding: 0.6rem;
    border-radius: 0.25rem;
    height:2.5rem;
    margin-right: 0.2rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }

`;