import styled from 'styled-components';

type ReviewCardTypes = {
  detail?: boolean
}

export const ReviewCardContainer = styled.div<ReviewCardTypes>`
  width: 100%;
  max-width: 700px;
  margin: 10px;
  padding-bottom: 20px;
  @media (max-width: 700px){
    width: 90%;
  }
  border-bottom: 1px solid #001d1e;
`;
export const ReviewCardDescription = styled.div<ReviewCardTypes>`
  width: 100%;
  color: gray;
`;
export const ReviewCardUsernameContainer = styled.div<ReviewCardTypes>`
  display: flex;
`;
export const ReviewCardUsername = styled.div<ReviewCardTypes>`
  width: 100%;
  color: #001d1e;
`;
export const ReviewCardTimeAgo = styled.div<ReviewCardTypes>`
  width: 100%;
  color: #001d1e;
  text-align: right;
`;