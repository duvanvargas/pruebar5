import React, { useEffect } from 'react';
import { ReviewsContainer } from './ReviewsStyles';
import { ReviewCard } from '../../Components/ReviewCard/ReviewCard';
import { TitleReview } from '../../Components/BookReviews/BookReviewsStyles';
import { LocalStorageKey, AppState } from '../../Store/Store';
import { useAppState } from '@laststance/use-app-state';
import { Review } from '../../Store/Review.interface';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import useDebounce from '../../Utils/Hooks/useDebounce';

export function Reviews() {
  const [appState] = useAppState<AppState>()
  const [searchTerm, setSearchTerm] = React.useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // if appState has changes, save it LocalStorage.
  useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    )
  }, [appState])
  return (
    <ReviewsContainer>
      <SearchBar placeholder="Buscar un usuario..." isSearching={false} onChange={(e) => setSearchTerm(e.target.value)} />
      <TitleReview>Reseñas</TitleReview>
      {appState.reviewList && appState.reviewList.filter((review:Review)=> debouncedSearchTerm.length === 0 ? true:review.username?.indexOf(debouncedSearchTerm) !== -1).map((review: Review,index: number) => (
        <ReviewCard key={index} review={review} />
      ))}
      {appState.reviewList && appState.reviewList.filter((review:Review)=> debouncedSearchTerm.length === 0 ? true:review.username?.indexOf(debouncedSearchTerm) !== -1).length === 0 && (
        <div>No hay reseñas/resultados :(</div>
      )}
    </ReviewsContainer>
  );
}
