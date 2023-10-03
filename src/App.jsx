import { useEffect, useState } from 'react';
import './App.css';
import BarPlayer from './components/BarPlayer/BarPlayer';
import CenterBlockFilter from './components/Main/CenterBlockFilter';
import SearchInput from './components/Main/SearchInput';
import SectionMusicList from './components/Main/SectionMusicList';
import SectionsNav from './components/SectionNav/SectionsNav';
import SideBar from './components/Main/SideBar';

function App() {
  const [visibleNav, setVisibleNav] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

  const handlerVisibleNav = () => setVisibleNav(!visibleNav);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(!loadingPage);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <SectionsNav onClick={handlerVisibleNav} visible={visibleNav} />
            <div className="main__centerblock centerblock">
              <SearchInput />
              <CenterBlockFilter />
              <SectionMusicList loadingPage={loadingPage} />
            </div>
            <SideBar loadingPage={loadingPage} />
          </main>
          <BarPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
