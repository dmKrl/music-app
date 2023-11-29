import ButtonFilter from './ButtonFilter';
import PopupFilter from './PopupFilter';
import {
  StyleFilterItem,
  CounterFilters,
} from '../Main/CenterBlockFilter.styles';

function FilterItem(props) {
  const {
    onClick,
    isOpen,
    children,
    id,
    tracks,
    authorTrackFilter,
    genreTrackFilter,
    sortTrackFilter,
  } = props;

  return (
    <StyleFilterItem>
      {authorTrackFilter && !genreTrackFilter && !sortTrackFilter ? (
        <CounterFilters>{authorTrackFilter.length}</CounterFilters>
      ) : (
        ''
      )}
      {genreTrackFilter && !authorTrackFilter && !sortTrackFilter ? (
        <CounterFilters>{genreTrackFilter.length}</CounterFilters>
      ) : (
        ''
      )}
      {sortTrackFilter && !authorTrackFilter && !genreTrackFilter ? (
        <CounterFilters>1</CounterFilters>
      ) : (
        ''
      )}
      <ButtonFilter isOpen={isOpen} onClick={onClick}>
        {children}
      </ButtonFilter>
      {isOpen && <PopupFilter key={id} id={id} track={tracks} />}
    </StyleFilterItem>
  );
}

export default FilterItem;
