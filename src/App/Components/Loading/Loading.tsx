import React from 'react';
import { Loader, LoaderSpin, LoaderSpinner } from './LoadingStyles';

export interface LoadingProps {
}

export function Loading({}: LoadingProps) {

  return (
    <Loader>
      <LoaderSpin></LoaderSpin>
      <LoaderSpinner></LoaderSpinner>
    </Loader>
  );
}
