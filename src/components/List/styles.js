import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem;
  height: 100%;

  flex: 0 0 13rem;

  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }

  header {
    height: 1.8rem;

    h2{
      font-weight: 500;
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;
