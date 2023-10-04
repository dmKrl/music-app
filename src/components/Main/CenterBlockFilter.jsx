import './CenterBlockFilter.css';
import FilterItem from '../UI/FilterItem';
import tracks from '../../data/tracks';

function CenterBlockFilter({ onClick, activeFilter }) {
  return (
    <>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <FilterItem
          onClick={() => onClick('musician')}
          isOpen={activeFilter === 'musician'}
          id="1"
          tracks={tracks.map((track) => (
            <p key={track.id} className="popup-text-info">
              {track.musician}
            </p>
          ))}
        >
          Исполнителю
        </FilterItem>
        <FilterItem
          onClick={() => onClick('year')}
          isOpen={activeFilter === 'year'}
          id="2"
          tracks={tracks.map((track) => (
            <p key={track.id} className="popup-text-info">
              {track.year}
            </p>
          ))}
        >
          Году выпуска
        </FilterItem>
        <FilterItem
          onClick={() => onClick('genre')}
          isOpen={activeFilter === 'genre'}
          id="3"
          tracks={tracks.map((track) => (
            <p key={track.id} className="popup-text-info">
              {track.genre}
            </p>
          ))}
        >
          Жанру
        </FilterItem>
      </div>
    </>
  );
}
export default CenterBlockFilter;
