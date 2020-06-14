import * as React from 'react';
import { Container } from './BooksStyles';
import { Book } from './Book.interface';
import { BookResult } from '../BookResult/BookResult';
import { Link } from '@reach/router';

export interface BooksProps {
  results: Book[];
}

export function Books ({results = []}: BooksProps) {
  return (
    <>
      <Container>
        {results && results.length > 0 && results.map((book:Book)=>(
          <BookResult key={book.id} book={book}/>
        ))}
      </Container>
    </>
  );
}
