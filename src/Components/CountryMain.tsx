import { useAppSelector } from '../redux/hooks';

type Props = { item: Country };

const CountryMain = ({ item }: Props) => {
  // const [country, setCountry] = useState<Country[]>();
  // const [borderCountry, setBorderCountry] = useState<string>();
  const theme = useAppSelector((state) => state.theme.value);

  // const getBorder = async (border: string) => {
  //   await axios
  //     .get(`https://restcountries.com/v3.1/alpha/${border?.toLocaleLowerCase()}`)
  //     .then((res) => res.data)
  //     .then((result) => setBorderCountry(result.name.common)).catch(error => console.log(error)
  //     )

  //   return borderCountry;
  // };

  return (
    <div className='mx-[10vw] mt-8 md:mt-20 mb-10 transition duration-200 md:flex items-center md:mx-0 md:w-full'>
      <div className='md:w-[50vw] md:px-[5vw] lg:px-[10vw]'>
        <img
          src={item.flags.png}
          alt={item.name.common}
          className='w-full transition duration-200'
        />
      </div>
      <div className='md:w-[50vw]'>
        <div className='md:flex items-center'>
          <div className='text-sm md:w-1/2'>
            <h1 className='font-bold text-lg mt-6'>{item.name.common}</h1>
            <div className='mt-5 space-y-1.5'>
              <p className='attribute'>
                Native name: <span className='value'>{item.name.official}</span>
              </p>
              <p className='attribute'>
                Population:{' '}
                <span className='value'>
                  {item.population.toLocaleString()}
                </span>
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
          <div className='text-sm mt-7 md:mt-0 md:pl-2 space-y-1.5'>
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
        </div>
        <div className=''>
          <p className='attribute text-sm mt-6'>Border countries: </p>
          <div className='text-xs font-semibold flex gap-2 items-center mt-2 flex-wrap md:pr-6'>
            {item?.borders?.length > 0 ? (
              item.borders.map((b, i) => (
                <div key={i} className=''>
                  <h1
                    className={`bg-white shadow-md rounded-sm px-6 py-1 ${
                      !theme && 'bg-dark_blue shadow-shadow_1'
                    }`}
                  >
                    {b}
                  </h1>
                </div>
              ))
            ) : (
              <p>-</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryMain;
