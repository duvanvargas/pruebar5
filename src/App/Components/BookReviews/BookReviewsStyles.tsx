import styled from 'styled-components';

type BookReviewsTypes = {
  detail?: boolean
}
export const TitleReview = styled.h3<BookReviewsTypes>`
  color: #001d1e;
  width: 100%;
  max-width: 700px;
  text-align: left;
  @media (max-width: 700px){
    width: 90%;
  }
`;

export const BookReviewContainer = styled.div<BookReviewsTypes>`
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