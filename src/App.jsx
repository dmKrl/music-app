import './App.css';
import BarPlayer from './components/BarPlayer';
import CenterBlockFilter from './components/CenterBlockFilter';
import SectionMusicList from './components/SectionMusicList';
import SectionsNav from './components/SectionsNav';

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
            <div className="main__sidebar sidebar">
              <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__icon">
                  <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout" />
                  </svg>
                </div>
              </div>
              <div className="sidebar__block">
                <div className="sidebar__list">
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="./">
                      <img
                        className="sidebar__img"
                        src="img/playlist01.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="./">
                      <img
                        className="sidebar__img"
                        src="img/playlist02.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="./">
                      <img
                        className="sidebar__img"
                        src="img/playlist03.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <BarPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
