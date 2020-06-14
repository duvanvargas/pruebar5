import styled from 'styled-components';

export const Loader = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  justify-content: center;
  display: flex;
  margin: auto;
  margin-top: 10px;
`;
export const LoaderSpin = styled.div`
  position: absolute;
  border: 4px solid #3F51B5;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
export const LoaderSpinner = styled.div`
  animation-delay: -0.5s;
`; 