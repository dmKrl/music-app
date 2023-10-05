function ItemPlaylist(props) {
  const { trackName, musician, album, time, loadingPage } = props;
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            {loadingPage ? (
              <div className="track__album-link-bones" href="http://" />
            ) : (
              <a className="track__title-link" href="http://">
                {trackName} <span className="track__title-span" />
              </a>
            )}
          </div>
        </div>
        <div className="track__author">
          {loadingPage ? (
            <div className="track__album-link-bones" href="http://" />
          ) : (
            <a className="track__author-link" href="http://">
              {musician}
            </a>
          )}
        </div>
        <div className="track__album">
          {loadingPage ? (
            <div className="track__album-link-bones" href="http://" />
          ) : (
            <a className="track__album-link" href="http://">
              {album}
            </a>
          )}
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          {loadingPage ? (
            <span className="track__time-text">00:00</span>
          ) : (
            <span className="track__time-text">{time}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemPlaylist;
