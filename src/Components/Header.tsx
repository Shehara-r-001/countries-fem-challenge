import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <div className='flex items-center justify-between py-5 px-4 sm:px-6 md:px-8 lg:px-10 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
      <h1 className='text-lg font-bold'>Where in the world?</h1>
      <div className='flex items-center space-x-2'>
        <MoonIcon className='h-5 w-5 cursor-pointer' />
        <p className='font-semibold'>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
