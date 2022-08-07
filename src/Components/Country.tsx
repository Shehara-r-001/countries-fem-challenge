import React from 'react';

type Props = {
  country: Country;
};

const Country = ({ country }: Props) => {
  return (
    <div className='mx-[10vw] sm:mx-0 bg-white my-8 rounded-md cursor-pointer'>
      <img
        src={country.flags.png}
        alt=''
        className='rounded-t-md w-full h-[180px] md:h-[160px] lg:h-[140px] object-cover'
      />
      <div className='p-4 text-sm'>
        <h1 className='font-bold mb-2 text-base'>{country.name.common}</h1>

        <p className='font-semibold'>
          Population:{' '}
          <span className='font-normal'>
            {country.population.toLocaleString()}
          </span>
        </p>
        <p className='font-semibold'>
          Region: <span className='font-normal'>{country.region}</span>
        </p>
        <p className='font-semibold'>
          Capital: <span className='font-normal'>{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
