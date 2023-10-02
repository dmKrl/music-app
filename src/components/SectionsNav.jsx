import './SectionsNav.css';
import SectionNavItem from './UI/SectionNavItem';

function SectionsNav({ onClick, visible }) {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <button onClick={onClick} className="nav__burger burger" type="button">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </button>
      {visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <SectionNavItem text="Главное" />
            <SectionNavItem text="Мой плейлист" />
            <SectionNavItem text="Войти" />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SectionsNav;
