import * as S from './SectionNavItem.styles';

function SectionNavItem(props) {
  const { text } = props;
  return (
    <S.MenuItem className="menu__item">
      <S.MenuLink href="./" className="menu__link">
        {text}
      </S.MenuLink>
    </S.MenuItem>
  );
}

export default SectionNavItem;
