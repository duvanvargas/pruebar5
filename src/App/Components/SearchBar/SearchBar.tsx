import React from 'react';
import { SearchInput } from './SearchBarStyles';
import { Loading } from '../Loading/Loading';

export interface SearchBarProps {
  placeholder: string;
  isSearching: boolean;
  onChange(e: any): void;
}

export function SearchBar({ placeholder = "", isSearching = false, onChange = () => {} }: SearchBarProps) {

  return (
    <>
      <SearchInput placeholder={placeholder} onChange={onChange}/>
      {isSearching && <Loading />}
    </>
  );
}
