function SectionNavItem(props) {
  const { text } = props;
  return (
    <li className="menu__item">
      <a href="./" className="menu__link">
        {text}
      </a>
    </li>
  );
}

export default SectionNavItem;
