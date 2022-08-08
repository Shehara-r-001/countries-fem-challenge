import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const DetailPage = () => {
  return (
    <div className='pt-[80px] bg-very_light_gray text-very_dark_blue_2 h-screen w-full'>
      <Link to='/'>
        <button className='flex items-center w-[100px] justify-around bg-white shadow-md rounded-sm ml-6 mt-5 cursor-pointer px-3 text-sm py-1 group'>
          <ArrowLeftIcon className='h-4 w-5 group-hover:-translate-x-2 duration-200' />
          <h1>Back</h1>
        </button>
      </Link>
    </div>
  );
};

export default DetailPage;
