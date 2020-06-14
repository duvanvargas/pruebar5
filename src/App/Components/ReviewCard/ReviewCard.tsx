import * as React from 'react';
import {
  ReviewCardContainer,
  ReviewCardDescription,
  ReviewCardUsername,
  ReviewCardTimeAgo,
  ReviewCardUsernameContainer,
} from './ReviewStyles';
import { Review } from '../../Store/Review.interface';
import moment from 'moment';
import 'moment/locale/es-us';

export interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review = {} }: ReviewCardProps) {
  return (
    <ReviewCardContainer>
      <ReviewCardDescription>
        {review.review}
      </ReviewCardDescription>
      <ReviewCardUsernameContainer>
        <ReviewCardUsername>
          @{review.username}
        </ReviewCardUsername>
        <ReviewCardTimeAgo>
          Hace {moment(review.timestamp).fromNow(true)}
        </ReviewCardTimeAgo>
      </ReviewCardUsernameContainer>
    </ReviewCardContainer>
  );
}
