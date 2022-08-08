import Countries from './Components/Countries';
import Filter from './Components/Filter';
import Header from './Components/Header';
import Search from './Components/Search';

function App() {
  return (
    <div className='bg-very_light_gray text-very_dark_blue_2 h-screen w-full overflow-y-scroll overflow-x-hidden'>
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
