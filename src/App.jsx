import { useEffect, useState } from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import BarPlayer from './components/BarPlayer/BarPlayer';
import CenterBlockFilter from './components/Main/CenterBlockFilter';
import SearchInput from './components/Main/SearchInput';
import SectionMusicList from './components/Main/SectionMusicList';
import SectionsNav from './components/SectionNav/SectionsNav';
import SideBar from './components/Main/SideBar';

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}
button {
  cursor: pointer;
}

ul li {
  list-style: none;
}
@font-face {
  font-family: 'StratosSkyeng';
  src:
    local('StratosSkyeng'),
    local('StratosSkyeng'),
    url('../public/fonts/StratosSkyeng.woff2') format('woff2'),
    url('../public/fonts/StratosSkyeng.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}
`;
function App() {
  const [visibleNav, setVisibleNav] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const [activeFilter, setActiveFilter] = useState(null);

  const handlerSelectCategory = (string) =>
    activeFilter === string ? setActiveFilter(null) : setActiveFilter(string);

  const handlerVisibleNav = () => setVisibleNav(!visibleNav);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(!loadingPage);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <SectionsNav onClick={handlerVisibleNav} visible={visibleNav} />
            <div className="main__centerblock centerblock">
              <SearchInput />
              <CenterBlockFilter
                onClick={handlerSelectCategory}
                activeFilter={activeFilter}
              />
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
