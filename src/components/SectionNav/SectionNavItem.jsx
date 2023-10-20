import * as S from './SectionNavItem.styles';

function SectionNavItem({ text, path, onClick }) {
  return (
    <S.MenuItem>
      <S.MenuLink
        to={path}
        onClick={onClick}
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
