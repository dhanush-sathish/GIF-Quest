import React, { useMemo} from 'react'
import { Input } from './ui/input';
import debounce from 'lodash.debounce';


interface props{
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar = ({ query, setQuery }: props) => {

    const debouncedSetQuery = useMemo(
    () => debounce((value: string) => setQuery(value), 500),
    [setQuery]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetQuery(e.target.value);
  };

  return (
    <div>
      <Input
        type="text"
        value={query}
        placeholder='Search for GIFs... (e.g happy)'
        onChange={handleChange}
        className='w-full px-4 py border rounded-md shadow-sm'
      />
    </div>
  )
}

export default SearchBar
