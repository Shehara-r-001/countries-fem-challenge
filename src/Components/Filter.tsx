import React, { MouseEvent, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import regions from '../data/dropdown.json';

const Filter = () => {
  const [dropdown, setDropdown] = useState(false);
  const [filter, setFilter] = useState('Filter by the region');

  const selectFilter = (
    e: React.MouseEvent<HTMLHeadingElement>,
    region: string
  ) => {
    setFilter(region);
    setDropdown(false);
  };
  return (
    <div className='ml-[10vw] md:ml-0 lg:mr-[100px] mt-[40px] md:mt-0 text-dark_gray text-sm relative'>
      <div className='shadow-md bg-white p-4 py-3 rounded-md  w-[240px] flex items-center justify-between '>
        <h1>{filter}</h1>
        {dropdown ? (
          <ChevronUpIcon
            className='h-4 w-4 cursor-pointer'
            onClick={() => setDropdown(!dropdown)}
          />
        ) : (
          <ChevronDownIcon
            className='h-4 w-4 cursor-pointer'
            onClick={() => setDropdown(!dropdown)}
          />
        )}
      </div>
      <div
        className={`bg-white w-[240px] rounded-md p-2 px-4 absolute top-[50px] leading-loose shadow-sm ${
          !dropdown && 'hidden'
        }`}
      >
        {regions.map((region) => (
          <h1
            key={region.id}
            className='cursor-pointer'
            onClick={(e) => selectFilter(e, region.region)}
          >
            {region.region}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Filter;