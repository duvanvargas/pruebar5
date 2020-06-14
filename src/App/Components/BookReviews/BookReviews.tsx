import * as React from 'react';
import { TitleReview } from './BookReviewsStyles';
import { BookReviewForm } from '../BookReviewForm/BookReviewForm';
import { useAppState } from '@laststance/use-app-state';
import { LocalStorageKey, AppState } from '../../Store/Store';
import { Review } from '../../Store/Review.interface';
import { ReviewCard } from '../ReviewCard/ReviewCard';

export interface BookReviewsProps {
  bookId: string
}


export function BookReviews({ bookId = "" }: BookReviewsProps) {
  const [appState] = useAppState<AppState>()

  // if appState has changes, save it LocalStorage.
  React.useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    )
  }, [appState])
  return (
    <>
      <TitleReview>Reseñas</TitleReview>
      {appState.reviewList && appState.reviewList.filter((review: Review)=> review.id === bookId).map((review: Review,index: number) =>(
        <ReviewCard review={review} key={index}/>
      ))}
      {appState.reviewList && appState.reviewList.filter((review: Review)=> review.id === bookId).length === 0 && (
        <div>No hay reseñas de este libro aún :(</div>
      )}
      <BookReviewForm bookId={bookId} />
    </>
  );
}
