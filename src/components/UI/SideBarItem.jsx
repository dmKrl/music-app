import './SideBarItem.css';

function SideBarItem(props) {
  const { image, loadingPage } = props;
  return (
    <div className="sidebar__item">
      {loadingPage ? (
        <div className="sidebar__img-bones" alt="day's playlist" />
      ) : (
        <a className="sidebar__link" href="./">
          <img className="sidebar__img" src={image} alt="day's playlist" />
        </a>
      )}
    </div>
  );
}

export default SideBarItem;
