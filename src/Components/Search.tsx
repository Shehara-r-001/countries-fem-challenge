import React, { ReactPropTypes, useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const Search = () => {
  const [search, setSearch] = useState<String>('');

  const inputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div className='w-full'>
      <form onSubmit={inputHandler} className=''>
        <div className='w-[80vw] md:w-[50vw] shadow-md mx-[10vw] md:mx-0 lg:ml-[100px] bg-white flex items-center p-2 py-3 pl-5 rounded-md space-x-5 text-dark_gray'>
          <SearchIcon className='h-5 w-5' />

          <input
            type='text'
            placeholder='Search for a country...'
            className='text-sm outline-none'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
