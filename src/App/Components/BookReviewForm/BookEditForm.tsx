import * as React from 'react';
import { useFormik } from 'formik';
import {
  ReviewForm, LabelForm, ReviewFormContainer,
  InputForm, TextAreaForm, ButtonForm
} from './BookReviewFormStyles';
import { Review } from '../../Store/Review.interface';
import { AppState } from '../../Store/Store';
import { useAppState } from '@laststance/use-app-state';
import { ReviewSchema } from './ReviewSchema';

export interface BookEditFormProps {
  review: Review,
  doneEdit(): void,
}


export function BookEditForm({ review = {} ,doneEdit = () => {}}: BookEditFormProps) {
  const [appState, setAppState] = useAppState<AppState>()
  const formik = useFormik({
    isInitialValid: true,
    initialValues: {
      id: review.id,
      username: review.username,
      review: review.review,
      unique_id: review.unique_id,
    },
    validationSchema: ReviewSchema,
    onSubmit: values => {
      // make new Review object
      const tempReview: Review = {
        id: values.id,
        username: values.username,
        unique_id: values.unique_id,
        review: values.review,
        timestamp: new Date().toISOString(),
      }
      const updatedReviews = appState.reviewList.map((reviewItem: Review) => {
        if(reviewItem.unique_id === tempReview.unique_id){
          return tempReview;
        }
        return reviewItem
      });
      setAppState({ reviewList: updatedReviews })
      doneEdit();
    },
  });
  return (
    <ReviewFormContainer>
      <h4>Editar esta reseña</h4>
      <ReviewForm onSubmit={formik.handleSubmit}>
        <LabelForm>Nombre de usuario</LabelForm>
        <InputForm
          id="username"
          name="username"
          placeholder="Nombre de usuario"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <LabelForm>Reseña</LabelForm>
        <TextAreaForm
          id="review"
          name="review"
          placeholder="Escribe tu reseña"
          onChange={formik.handleChange}
          value={formik.values.review}
        />
        <ButtonForm disabled={!formik.isValid}>Actualizar</ButtonForm>
      </ReviewForm>
    </ReviewFormContainer>
  );
}
