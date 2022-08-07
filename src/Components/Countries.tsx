import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';

const Countries = () => {
  const [data, setData] = useState([]);

  const fetchCountries = async () => {
    await axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCountries();
    // console.log(data);
  }, []);

  return (
    <div className='mx-[10vw] mt-[40px] sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5'>
      {data.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </div>
  );
};

export default Countries;