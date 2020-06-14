import styled from 'styled-components';

type BookCardTypes = {
  detail?: boolean
}

export const BookCard = styled.div<BookCardTypes>`
  display: flex;
  max-width: ${props => props.detail ? '700px' : '300px'};
  margin: 10px;
  box-shadow: 0px 0px 53px -16px rgba(0,0,0,0);
  transition: transform .5s;
  ${props => !props.detail ? `
    &:hover{
      box-shadow: 0px 0px 53px -16px rgba(0,0,0,0.75);
      transform: scale(1.05);}`
    : `
  @media (max-width: 700px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `};
`;

export const ImageBook = styled.img<BookCardTypes>`
  width: ${props => props.detail ? '200px' : '100px'};
  height: ${props => props.detail ? '240px' : '120px'};
  margin: 10px;
`;
export const InfoBook = styled.div<BookCardTypes>`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    ${props => !props.detail ? `
      padding: 20px;
      padding-top: 0px;
    `
    : ``};
`;
export const RateBook = styled.div`
  font-weight: 300;
  font-size: 13px;
`;
export const TitleBook = styled.div`
  font-weight: 600;
`;
export const AuthorBook = styled.div`
  font-weight: 400;
  font-size: 12px;
`;

export const DescriptionBook = styled.div`
  font-weight: 400;
`;