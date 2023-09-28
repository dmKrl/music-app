import './SideBarItem.css';

function SideBarItem(props) {
  const { image } = props;
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="./">
        <img className="sidebar__img" src={image} alt="day's playlist" />
      </a>
    </div>
  );
}

export default SideBarItem;
