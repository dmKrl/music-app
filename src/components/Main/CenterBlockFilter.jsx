import { useSelector } from 'react-redux';
import FilterItem from '../UI/FilterItem';
import * as S from './CenterBlockFilter.styles';
import { selectAllTracks } from '../../redux/slices/switchTracksSlice';

function CenterBlockFilter({ onClick, activeFilter }) {
  const allTracks = useSelector(selectAllTracks);
  return (
    <>
      <S.CenterBlockHeading>Треки</S.CenterBlockHeading>
      <S.CenterBlockFilter className="centerblock__filter filter">
        <S.FilterTitle className="filter__title">Искать по:</S.FilterTitle>
        <FilterItem
          onClick={() => onClick('musician')}
          isOpen={activeFilter === 'musician'}
          id="1"
          tracks={allTracks.map((track) => (
            <S.PopupTextInfo key={track.id} className="popup-text-info">
              {track.author}
            </S.PopupTextInfo>
          ))}
        >
          Исполнителю
        </FilterItem>
        <FilterItem
          onClick={() => onClick('year')}
          isOpen={activeFilter === 'year'}
          id="2"
          tracks={allTracks.map((track) => (
            <S.PopupTextInfo key={track.id} className="popup-text-info">
              {track.release_date}
            </S.PopupTextInfo>
          ))}
        >
          Году выпуска
        </FilterItem>
        <FilterItem
          onClick={() => onClick('genre')}
          isOpen={activeFilter === 'genre'}
          id="3"
          tracks={allTracks.map((track) => (
            <S.PopupTextInfo key={track.id} className="popup-text-info">
              {track.genre}
            </S.PopupTextInfo>
          ))}
        >
          Жанру
        </FilterItem>
      </S.CenterBlockFilter>
    </>
  );
}
export default CenterBlockFilter;
