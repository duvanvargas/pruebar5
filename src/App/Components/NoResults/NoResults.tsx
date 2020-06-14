import React from 'react';
import { NoRes } from './NoResultsStyles';

export interface NoResultsProps {
}

export function NoResults({}: NoResultsProps) {

  return (
    <NoRes>No hemos encontrado resultados :(</NoRes>
  );
}
