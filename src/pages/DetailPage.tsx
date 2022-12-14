import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import CountryMain from '../Components/CountryMain';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Pulsar } from '@uiball/loaders';
import { useAppSelector } from '../redux/hooks';

const DetailPage = () => {
  let { name } = useParams() as any;
  // console.log('params ::', params);
  // console.log('name---', name);

  // const path = useLocation().pathname.split('/')[2];
  // console.log('path----', path);

  const [country, setCountry] = useState<[Country]>();
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    const fetchCountry = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => setCountry(res.data))
        .catch((error) => console.log(error));
    };
    fetchCountry();
  }, [name]);

  if (!country) {
    return <Pulsar size={40} speed={1.75} color='black' />;
  }

  return (
    <div
      className={`pt-[80px] bg-very_light_gray text-very_dark_blue_2 h-screen w-full overflow-y-scroll ${
        !theme && 'bg-very_dark_blue text-white'
      }`}
    >
      <Link to='/'>
        <button
          className={`flex items-center w-[100px] justify-around bg-white shadow-md rounded-sm ml-[10vw] mt-5 cursor-pointer px-3 text-sm py-1 group ${
            !theme && 'bg-dark_blue text-white shadow-shadow_1'
          }`}
        >
          <ArrowLeftIcon className='h-4 w-5 group-hover:-translate-x-2 duration-200' />
          <h1>Back</h1>
        </button>
      </Link>
      {country?.slice(0, 1).map((item, index) => (
        <div key={index}>
          <CountryMain item={item} />
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
