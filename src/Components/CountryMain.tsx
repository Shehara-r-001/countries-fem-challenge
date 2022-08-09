import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ObjectFlags } from 'typescript';
import { isNativeError } from 'util/types';

type Props = { item: Country };

const CountryMain = ({ item }: Props) => {
  const [cName, setCName] = useState('');

  //   let cData = Promise.all(
  //     item?.borders.map(async (border) => {
  //       const res = await axios.get(
  //         `https://restcountries.com/v3.1/alpha/${border}`
  //       );
  //       return res.data;
  //       //   console.log(res.data);
  //     })
  //   );

  return (
    <div className='mx-[10vw] mt-8'>
      <img src={item.flags.png} alt={item.name.common} className='w-full' />
      <div className='text-sm'>
        <h1 className='font-bold text-lg mt-6'>{item.name.common}</h1>
        <div className='mt-5 space-y-1.5'>
          <p className='attribute'>
            Native name: <span className='value'>{item.name.official}</span>
          </p>
          <p className='attribute'>
            Population:{' '}
            <span className='value'>{item.population.toLocaleString()}</span>
          </p>
          <p className='attribute'>
            Region: <span className='value'>{item.region}</span>
          </p>
          <p className='attribute'>
            SubRegion: <span className='value'>{item.subregion}</span>
          </p>
          <p className='attribute'>
            Capital: <span className='value'>{item.capital[0]}</span>
          </p>
        </div>
      </div>
      <div className='text-sm mt-7 space-y-1.5'>
        <p className='attribute'>
          Top level domain: <span className='value'>{item.tld}</span>
        </p>
        <p className='attribute flex items-center'>
          Currencies:{' '}
          <span className='flex items-center value ml-1'>
            {Object.keys(item.currencies).map((cur, index) => (
              <p key={index} className=''>
                {item.currencies[cur].name}
              </p>
            ))}
          </span>
        </p>
        <p className='attribute flex items-center'>
          Languages:{' '}
          <span className='value flex items-center space-x-1 ml-1'>
            {Object.keys(item.languages).map((lan, index) => (
              <p key={index}>{item.languages[lan]}</p>
            ))}
          </span>
        </p>
      </div>
      <div>{/* {item.borders.} */}</div>
    </div>
  );
};

export default CountryMain;
