import { useState, useEffect } from 'react';

// Custom hook 
export default function useDebounce(value: string, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [delay, value] 
  );

  return debouncedValue;
}