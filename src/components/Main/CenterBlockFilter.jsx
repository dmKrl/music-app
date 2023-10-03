import { useState } from 'react';
import './CenterBlockFilter.css';
import FilterItem from '../UI/FilterItem';
import tracks from '../../data/tracks';

function CenterBlockFilter() {
  const [visibilityOne, setVisibilityOne] = useState(false);
  const [visibilityTwo, setVisibilityTwo] = useState(false);
  const [visibilityThree, setVisibilityThree] = useState(false);

  const handlerChangeVisionPopupOne = () => {
    setVisibilityOne(!visibilityOne);
    setVisibilityTwo(false);
    setVisibilityThree(false);
  };
  const handlerChangeVisionPopupTwo = () => {
    setVisibilityOne(false);
    setVisibilityTwo(!visibilityTwo);
    setVisibilityThree(false);
  };
  const handlerChangeVisionPopupThree = () => {
    setVisibilityOne(false);
    setVisibilityTwo(false);
    setVisibilityThree(!visibilityThree);
  };
  return (
    <>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <FilterItem
          onClick={handlerChangeVisionPopupOne}
          visibility={visibilityOne}
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
          onClick={handlerChangeVisionPopupTwo}
          visibility={visibilityTwo}
          id="2"
          tracks={tracks.map((track) => (
            <p key={track.id} className="popup-text-info">
              {track.time}
            </p>
          ))}
        >
          Продолжительности
        </FilterItem>
        <FilterItem
          onClick={handlerChangeVisionPopupThree}
          visibility={visibilityThree}
          id="3"
          tracks={tracks.map((track) => (
            <p key={track.id} className="popup-text-info">
              {track.album}
            </p>
          ))}
        >
          Альбому
        </FilterItem>
      </div>
    </>
  );
}
export default CenterBlockFilter;
