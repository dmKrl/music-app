import SideBarItem from '../UI/SideBarItem';
import * as S from './SideBar.styles';

function SideBar({ loadingPage }) {
  return (
    <S.SideBarMain>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Sergey.Ivanov</S.SideBarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <SideBarItem image="img/playlist01.png" loadingPage={loadingPage} />
        <SideBarItem image="img/playlist02.png" loadingPage={loadingPage} />
        <SideBarItem image="img/playlist03.png" loadingPage={loadingPage} />
      </S.SideBarBlock>
    </S.SideBarMain>
  );
}

export default SideBar;
