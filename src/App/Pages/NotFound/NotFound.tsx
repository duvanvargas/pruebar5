import React from 'react';
import { NotFoundContainer } from './NotFoundStyles';

export interface NotFoundProps {
}

export function NotFound({}: NotFoundProps) {

  return (
    <NotFoundContainer>La página que estás buscando no existe :(</NotFoundContainer>
  );
}
