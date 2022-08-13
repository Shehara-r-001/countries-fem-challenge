import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

type Props = {
  country: Country;
};

const Country = ({ country }: Props) => {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <Link to={`/country/${country.name.common}`}>
      <div
        className={`mx-[10vw] sm:mx-0 bg-white my-8 rounded-md cursor-pointer ${
          !theme && 'bg-dark_blue text-white'
        }`}
      >
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
    </Link>
  );
};

export default Country;
