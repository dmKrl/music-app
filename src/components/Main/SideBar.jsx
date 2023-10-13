import './SideBar.css';
import SideBarItem from '../UI/SideBarItem';

function SideBar({ loadingPage }) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <SideBarItem image="img/playlist01.png" loadingPage={loadingPage} />
        <SideBarItem image="img/playlist02.png" loadingPage={loadingPage} />
        <SideBarItem image="img/playlist03.png" loadingPage={loadingPage} />
      </div>
    </div>
  );
}

export default SideBar;