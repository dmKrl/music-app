import { Link } from 'react-router-dom';
import * as S from './SectionNav.styles';
import SectionNavItem from './SectionNavItem';

function SectionsNav({ onClick, visible, handleLogout }) {
  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImg src="img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <S.NavBurger onClick={onClick} type="button">
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <SectionNavItem text="Главная" path="/" />
            <SectionNavItem text="Мои треки" path="/favorites" />
            <SectionNavItem text="Выйти" onClick={handleLogout} path="/signin" />
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}

export default SectionsNav;
