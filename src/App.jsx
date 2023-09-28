import './App.css';
import BarPlayer from './components/BarPlayer';
import CenterBlockFilter from './components/CenterBlockFilter';
import SectionMusicList from './components/SectionMusicList';
import SectionsNav from './components/SectionsNav';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <SectionsNav />
            <div className="main__centerblock centerblock">
              <div className="centerblock__search search">
                <svg className="search__svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-search" />
                </svg>
                <input
                  className="search__text"
                  type="search"
                  placeholder="Поиск"
                  name="search"
                />
              </div>
              <h2 className="centerblock__h2">Треки</h2>
              <CenterBlockFilter />
              <SectionMusicList />
            </div>
            <SideBar />
          </main>
          <BarPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
