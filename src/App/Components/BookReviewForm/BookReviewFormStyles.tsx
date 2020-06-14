import styled from 'styled-components';

type BookReviewFormTypes = {
  detail?: boolean
}

export const ReviewFormContainer = styled.div<BookReviewFormTypes>`
  margin: 10px;
  width: 100%;
  max-width: 700px;
  @media (max-width: 700px){
    width: 90%;
  }
`;
export const ReviewForm = styled.form<BookReviewFormTypes>`
  display: flex;
  flex-direction: column;
`;

export const LabelForm = styled.label<BookReviewFormTypes>`
  color: #001d1e
`;

export const InputForm = styled.input<BookReviewFormTypes>`
    padding: 10px;
    border: 2px solid #001d1e;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 5px;
`;

export const TextAreaForm = styled.textarea<BookReviewFormTypes>`
    padding: 10px;
    border: 2px solid #001d1e;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 5px;
    resize: none; 
`;

export const ButtonForm = styled.button<BookReviewFormTypes>`
    color: white;
    background-color: #001d1e;
    width: 200px;
    border-radius: 10px;
    resize: none;
    align-self: flex-end;
    display: flex;
    text-align: center;
    border: none;
    justify-content: center;
    align-items: center;
    height: 40px;
    @media (max-width: 700px){
      align-self: center;
    }
    &:disabled{
      opacity: 0.5;
    }
`;