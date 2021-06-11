import styled from 'styled-components';

export const Container = styled.div`
 position: relative;
 background: #FFF;
 border-radius: 0.5rem;
 margin-bottom: 0.8rem;
 padding: 1.25rem;
 box-shadow: 0 1px 4px 0 rgba(192,208,230, 0.8);
 border-top: 1rem solid rgba(230,236,245,0.4);
 cursor: grab;
 text-align: center;

 header{
   position: absolute;
   top: -17px;
   left: 5px;
 }
 p {
  font-weight: 500;
  line-height: 1rem;
 }

`;
export const Label = styled.div`
 width: 0.6rem;
 height: 0.6rem;
 border-radius: 0.2rem;
 display: inline-block;
 background: ${(props) => props.color}
`;
