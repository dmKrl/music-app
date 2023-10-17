import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BarPlayer from '../components/BarPlayer/BarPlayer';
import SearchInput from '../components/Main/SearchInput';
import SectionsNav from '../components/SectionNav/SectionsNav';
import SideBar from '../components/SideBar/SideBar';
import GlobalStyle from '../GlobalStyle.styles';
import * as S from '../App.styles';
import SignIn from './SignIn';

function MainPage({ isAllowed, handleLogin }) {
  const [visibleNav, setVisibleNav] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
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
        {isAllowed ? (
          <S.Container>
            <S.Main>
              <SectionsNav onClick={handlerVisibleNav} visible={visibleNav} />
              <S.MainCnterBlock>
                <SearchInput />
                <Outlet />
              </S.MainCnterBlock>
              <SideBar loadingPage={loadingPage} />
            </S.Main>
            <BarPlayer />
            <footer />
          </S.Container>
        ) : (
          <SignIn handleLogin={handleLogin} />
        )}
      </S.Wrapper>
    </>
  );
}

export default MainPage;
