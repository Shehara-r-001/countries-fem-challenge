import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';
import { useAppSelector } from '../redux/hooks';

const Countries = () => {
  const [data, setData] = useState([]);
  const filter = useAppSelector((state) => state.filter.value);
  const searchString = useAppSelector((state) => state.searchString.value);

  useEffect(() => {
    const fetchCountries = async () => {
      if (filter === 'all') {
        await axios
          .get(`https://restcountries.com/v3.1/${filter}`)
          .then((res) => setData(res.data))
          .catch((error) => console.log(error));
      } else {
        await axios
          .get(`https://restcountries.com/v3.1/region/${filter}`)
          .then((res) => setData(res.data))
          .catch((error) => console.log(error));
      }
    };

    fetchCountries();
  }, [filter]);

  useEffect(() => {
    const searchCountries = async () => {
      if (!searchString) {
        await axios
          .get(`https://restcountries.com/v3.1/all`)
          .then((res) => setData(res.data))
          .catch((error) => console.log(error));
      } else {
        await axios
          .get(`https://restcountries.com/v3.1/name/${searchString}`)
          .then((res) => setData(res.data))
          .catch((error) => console.log(error));
      }

      // if (!data) {
      //   return <Pulsar size={40} speed={1.75} color='black' />;
      // }
    };

    searchCountries();
  }, [searchString]);

  return (
    <div className='mx-[10vw] mt-[40px] sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5'>
      {data.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </div>
  );
};

export default Countries;
