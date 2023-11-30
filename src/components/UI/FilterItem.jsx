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

  console.log(authorTrackFilter);
  return (
    <StyleFilterItem>
      {!genreTrackFilter && !sortTrackFilter && authorTrackFilter.length ? (
        <CounterFilters>{authorTrackFilter.length}</CounterFilters>
      ) : (
        ''
      )}
      {!authorTrackFilter && !sortTrackFilter && genreTrackFilter.length ? (
        <CounterFilters>{genreTrackFilter.length}</CounterFilters>
      ) : (
        ''
      )}
      {!authorTrackFilter &&
      !genreTrackFilter &&
      sortTrackFilter.sort !== '' &&
      sortTrackFilter.sort !== 'по умолчанию' ? (
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
