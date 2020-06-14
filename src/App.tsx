import React, { useState, useEffect } from 'react';
import { SearchBar } from './App/Components/SearchBar/SearchBar';
import { Books } from './App/Components/Books/Books';
import useDebounce from './App/Utils/Hooks/useDebounce';
import { searchBooks } from './App/Utils/Requests';
import { NoResults } from './App/Components/NoResults/NoResults';
import { Link } from '@reach/router';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchBooks(debouncedSearchTerm).then((results) => {
          // Set back to false since request finished
          setIsSearching(false);
          // Set results state
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );
  return (
    <>
      <SearchBar placeholder="Buscar un libro..." isSearching={isSearching} onChange={ (e)=> setSearchTerm(e.target.value) }/>
      <Books results={results}/>
      {!isSearching && results.length === 0 && debouncedSearchTerm.length > 0 && (
        <NoResults />
      )}
    </>
  );
}

export default App;
