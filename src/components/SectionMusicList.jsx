import './SectionMusicList.css';
import tracks from '../data/tracks';
import ItemPlaylist from './UI/ItemPlaylist';

function SectionMusicList({ loadingPage }) {
  // Здесь по хорошему мы должны получать GET запрос и выводить данные, например через map
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        {tracks.map((track) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ItemPlaylist {...track} key={track.id} loadingPage={loadingPage} />
        ))}
      </div>
    </div>
  );
}

export default SectionMusicList;
