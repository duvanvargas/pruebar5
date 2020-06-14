import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin: 10px;
  margin: auto;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 1400px){
    grid-template-columns: auto auto auto;
    max-width: 1000px;
  }
  @media (max-width: 1000px){
    grid-template-columns: auto auto;
    max-width: 700px;
  }
  @media (max-width: 700px){
    grid-template-columns: auto;
    justify-content: center;
  }
`;