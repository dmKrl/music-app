import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import SideBarItem from '../UI/SideBarItem';
import * as S from './SideBar.styles';
import categories from '../../data/categories';
import UserData from '../../context/UserData';

function SideBar({ onClick }) {
  const { userInfo } = useContext(UserData);
  const location = useLocation();
  return (
    <S.SideBarMain>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{userInfo.username}</S.SideBarPersonalName>
        <S.SideBarIcon onClick={onClick} to="/auth">
          <svg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        {location.pathname === '/'
          ? categories.map((category) => (
              <SideBarItem
                image={category.img}
                to={`/category/${category.id}`}
                key={category.id}
              />
            ))
          : ''}
      </S.SideBarBlock>
    </S.SideBarMain>
  );
}

export default SideBar;
