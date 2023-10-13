import { useEffect, useState } from 'react';
import './App.css';
import BarPlayer from './components/BarPlayer/BarPlayer';
import CenterBlockFilter from './components/Main/CenterBlockFilter';
import SearchInput from './components/Main/SearchInput';
import SectionMusicList from './components/Main/SectionMusicList';
import SectionsNav from './components/SectionNav/SectionsNav';
import SideBar from './components/SideBar/SideBar';
import * as S from './App.styles';
import GlobalStyle from './GlobalStyle.styles';

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
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <SectionsNav onClick={handlerVisibleNav} visible={visibleNav} />
            <S.MainCnterBlock>
              <SearchInput />
              <CenterBlockFilter
                onClick={handlerSelectCategory}
                activeFilter={activeFilter}
              />
              <SectionMusicList loadingPage={loadingPage} />
            </S.MainCnterBlock>
            <SideBar loadingPage={loadingPage} />
          </S.Main>
          <BarPlayer />
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
