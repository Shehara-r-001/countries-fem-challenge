import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSearchString } from '../redux/searchSlice';

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  const inputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchString(search));
    // console.log(search);
  };

  return (
    <div className='w-full'>
      <form onSubmit={inputHandler} className=''>
        <div
          className={`w-[80vw] md:w-[50vw] shadow-sm mx-[10vw] md:mx-0 lg:ml-[100px] bg-white flex items-center p-2 py-3 pl-5 rounded-md space-x-5 text-dark_gray ${
            !theme && 'bg-dark_blue'
          }`}
        >
          <SearchIcon className={`h-5 w-5 ${!theme && 'text-white'}`} />

          <input
            type='text'
            placeholder='Search for a country...'
            className={`text-sm outline-none ${
              !theme && 'bg-dark_blue text-white'
            }`}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
