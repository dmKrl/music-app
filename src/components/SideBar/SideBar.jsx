import SideBarItem from '../UI/SideBarItem';
import * as S from './SideBar.styles';
import categories from '../../data/categories';

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
        {categories.map((category) => (
          <SideBarItem
            image={category.img}
            loadingPage={loadingPage}
            to={`/category/${category.id}`}
          />
        ))}
      </S.SideBarBlock>
    </S.SideBarMain>
  );
}

export default SideBar;
