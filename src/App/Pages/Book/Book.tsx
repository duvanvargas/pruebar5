import React, { useState, useEffect } from 'react';
import { BookContainer } from './BookStyles';
import { RouteComponentProps } from '@reach/router';
import { useParams } from "@reach/router"
import { Book } from '../../Components/Books/Book.interface';
import { getBook } from '../../Utils/Requests';
import { Loading } from '../../Components/Loading/Loading';
import { BookResult } from '../../Components/BookResult/BookResult';
import { BookReviews } from '../../Components/BookReviews/BookReviews';

export interface BookProps extends RouteComponentProps{

}

export function BookDetail(props: BookProps) {
  // Get params from router
  const params = useParams();
  
  const [book, setBook] = useState<Book>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      if (params.bookId) {
        setIsLoading(true);
        getBook(params.bookId).then((resultItem: Book) => {
          // Set back to false since request finished
          setIsLoading(false);
          // Set results state
          setBook(resultItem);
        });
      } else {
        setBook({});
      }
    },
    [params.bookId]
  );

  return (
    <BookContainer>
      {!isLoading && book.id && (
        <>
          <BookResult book={book} detail={true}/>
          <BookReviews bookId={book.id}/>
        </>
      )}
      {isLoading && <Loading />}
    </BookContainer>
  );
}
