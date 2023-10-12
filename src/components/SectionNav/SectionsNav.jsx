import * as S from './SectionNav.styles';
import SectionNavItem from './SectionNavItem';

function SectionsNav({ onClick, visible }) {
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={onClick} type="button">
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <SectionNavItem text="Главное" />
            <SectionNavItem text="Мой плейлист" />
            <SectionNavItem text="Войти" />
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}

export default SectionsNav;
