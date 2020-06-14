import React from 'react';
import { Loader, LoaderSpin, LoaderSpinner } from './LoadingStyles';


export function Loading() {

  return (
    <Loader>
      <LoaderSpin></LoaderSpin>
      <LoaderSpinner></LoaderSpinner>
    </Loader>
  );
}
