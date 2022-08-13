import Countries from './Components/Countries';
import Filter from './Components/Filter';
import Search from './Components/Search';
import { useAppSelector } from './redux/hooks';

function App() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div
      className={`bg-very_light_gray text-very_dark_blue_2 h-screen w-full overflow-y-scroll overflow-x-hidden ${
        !theme && 'bg-very_dark_blue'
      }`}
    >
      <main className='pt-[100px] w-[100vw]'>
        <div className='md:flex'>
          <Search />
          <Filter />
        </div>
        <Countries />
      </main>
    </div>
  );
}

export default App;
