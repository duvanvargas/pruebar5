import * as React from 'react';
import { useFormik } from 'formik';
import {
  ReviewForm, LabelForm, ReviewFormContainer,
  InputForm, TextAreaForm, ButtonForm } from './BookReviewFormStyles';
import { Review } from '../../Store/Review.interface';
import { AppState } from '../../Store/Store';
import { useAppState } from '@laststance/use-app-state';
import { ReviewSchema } from './ReviewSchema';

export interface BookReviewFormProps {
  bookId: string
}


export function BookReviewForm({ bookId = "" }: BookReviewFormProps) {
  const [appState, setAppState] = useAppState<AppState>()
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      username: '',
      review: '',
    },
    validationSchema: ReviewSchema,
    onSubmit: values => {
      // make new Review object
      const review: Review = {
        id: bookId,
        username: values.username,
        review: values.review,
        timestamp: new Date().toISOString(),
      }
      setAppState({ reviewList: [review, ...appState.reviewList] })
      formik.resetForm();
    },
  });
  return (
    <ReviewFormContainer>
      <h4>Escribe una reseña</h4>
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
        <ButtonForm disabled={!formik.isValid}>Publicar</ButtonForm>
      </ReviewForm>
    </ReviewFormContainer>
  );
}
