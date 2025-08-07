import React, { useMemo, useState } from 'react';
import { Input } from './ui/input';
import debounce from 'lodash.debounce';

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar = ({ query, setQuery }: Props) => {
  const [inputValue, setInputValue] = useState(query); // Internal state

  // Debounced function to update query after typing stops
  const debouncedSetQuery = useMemo(
    () => debounce((value: string) => setQuery(value), 500),
    [setQuery]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);           // Update the visible input
    debouncedSetQuery(value);      // Debounced search trigger
  };

  return (
    <div>
      <Input
        type="text"
        value={inputValue}
        placeholder="Search for GIFs... (e.g happy)"
        onChange={handleChange}
        className="w-full px-4 py border rounded-md shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
