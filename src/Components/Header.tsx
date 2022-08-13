import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { applyTheme } from '../redux/themeSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  const setTheme = () => {
    dispatch(applyTheme(!theme));
  };
  return (
    <div
      className={`flex items-center justify-between py-5 px-4 sm:px-6 md:px-8 lg:px-10 shadow-md fixed top-0 left-0 right-0 z-50 bg-white ${
        !theme && 'text-white bg-dark_blue'
      }`}
    >
      <h1 className='text-lg font-bold'>Where in the world?</h1>
      <div className='flex items-center space-x-2'>
        {theme ? (
          <div className='flex items-center space-x-2'>
            <MoonIcon className='h-5 w-5 cursor-pointer' onClick={setTheme} />
            <p className='font-semibold'>Dark Mode</p>
          </div>
        ) : (
          <div className='flex items-center space-x-2'>
            <SunIcon className='h-5 w-5 cursor-pointer' onClick={setTheme} />
            <p className='font-semibold'>Light Mode</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
