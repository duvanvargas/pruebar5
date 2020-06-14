import styled from 'styled-components';

type ReviewCardTypes = {
  onClick(event: React.MouseEvent<HTMLElement>):void
}

export const ReviewCardContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 10px;
  padding-bottom: 20px;
  @media (max-width: 700px){
    width: 90%;
  }
  border-bottom: 1px solid #001d1e;
`;
export const ReviewCardDescription = styled.div`
  width: 100%;
  color: gray;
  overflow: auto;
  height: auto;
}
`;
export const RemoveCardOption = styled.div<ReviewCardTypes>`
  border: none;
  width: 15px;
  height: 15px;
  background: url(/close.svg);
  background-size: cover;
  margin-left: 10px;
  cursor: pointer;
`;
export const EditCardOption = styled.div<ReviewCardTypes>`
  border: none;
  width: 15px;
  height: 15px;
  background: url(/edit.svg);
  background-size: cover;
  cursor: pointer;
`;
export const ReviewCardUsernameContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ReviewCardUsername = styled.div`
  width: 100%;
  color: #001d1e;
`;
export const ReviewCardTimeAgo = styled.div`
  width: 100%;
  color: #001d1e;
  text-align: right;
`;