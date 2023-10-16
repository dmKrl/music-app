import * as S from './SectionNavItem.styles';

function SectionNavItem({ text, path }) {
  return (
    <S.MenuItem>
      <S.MenuLink
        to={path}
        style={({ isActive }) =>
          isActive ? { color: '#d3d3d3', textDecoration: 'underline' } : {}
        }
      >
        {text}
      </S.MenuLink>
    </S.MenuItem>
  );
}

export default SectionNavItem;
