import React, { useState } from 'react';
import {
  ReviewCardContainer,
  ReviewCardDescription,
  ReviewCardUsername,
  ReviewCardTimeAgo,
  RemoveCardOption,
  EditCardOption,
  ReviewCardUsernameContainer,
} from './ReviewStyles';
import { Review } from '../../Store/Review.interface';
import moment from 'moment';
import 'moment/locale/es-us';
import { useAppState } from '@laststance/use-app-state';
import { AppState } from '../../Store/Store';
import { BookEditForm } from './../BookReviewForm/BookEditForm'

export interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review = {} }: ReviewCardProps) {
  const [appState, setAppState] = useAppState<AppState>()
  const [edit, setEdit] = useState(false);
  const removeReview = (unique_id: string | undefined) => {
    const newReviewList = appState.reviewList.filter((review: Review)=>review.unique_id!== unique_id);
    setAppState({ reviewList: newReviewList });
  }

  const editReview = (unique_id: string | undefined) => {
    setEdit(!edit);
  }
  return (
    <ReviewCardContainer>
      <ReviewCardUsernameContainer>
        {!edit && (
          <ReviewCardDescription>
            {review.review}
          </ReviewCardDescription>
        )}
        <EditCardOption onClick={()=>editReview(review.unique_id)} />
        <RemoveCardOption onClick={()=>removeReview(review.unique_id)} />
      </ReviewCardUsernameContainer>
      {!edit ? (
        <>
        <ReviewCardUsernameContainer>
          <ReviewCardUsername>
            @{review.username}
          </ReviewCardUsername>
          <ReviewCardTimeAgo>
            Hace {moment(review.timestamp).fromNow(true)}
          </ReviewCardTimeAgo>
        </ReviewCardUsernameContainer>
        </>
      ):(
        <BookEditForm review={review} doneEdit={() => editReview(undefined)}/>
      )}
    </ReviewCardContainer>
  );
}
