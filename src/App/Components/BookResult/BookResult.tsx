import * as React from 'react';
import { Book } from '../Books/Book.interface';
import {
  BookCard,
  DescriptionBook,
  ImageBook,
  RateBook, TitleBook, AuthorBook, InfoBook
} from './BookResultStyles';
import { Link } from '@reach/router';

export interface BookResultProps {
  book: Book;
  detail?: boolean;
}

const regex = /(<([^>]+)>)/ig;

const BookItem = (detail: boolean, book: Book) => (
  <BookCard detail={detail}>
    <ImageBook src={book.volumeInfo?.imageLinks?.thumbnail} detail={detail} />
    <InfoBook >
      <RateBook >{book.volumeInfo?.averageRating || '-'}</RateBook>
      <TitleBook >{book.volumeInfo?.title}</TitleBook>
      <AuthorBook >{book.volumeInfo?.authors?.join(',')}</AuthorBook>
      {detail && book.volumeInfo?.description && (
        <DescriptionBook>{book.volumeInfo?.description.replace(regex, '')}</DescriptionBook>
      )}
    </InfoBook>
  </BookCard>
)

export function BookResult({ book = {}, detail = false }: BookResultProps) {
  return (
    <>
      {!detail ? (
        <Link to={`/book/${book.id}`}>
          {BookItem(detail, book)}
        </Link>
      ):BookItem(detail, book)}
    </>
  );
}
