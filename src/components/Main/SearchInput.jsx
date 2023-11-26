import { useDispatch, useSelector } from 'react-redux';
import * as S from './SearchInput.styles';
import {
  selectNameTrackFilter,
  setAuthorTrackFilter,
  setNameTrackFilter,
} from '../../redux/slices/filterSlice';

function SearchInput() {
  const dispatch = useDispatch();
  const nameTrackFilter = useSelector(selectNameTrackFilter);

  const handleNameAndAuthorTrackChange = (e) => {
    dispatch(setNameTrackFilter(e.target.value));
    dispatch(setAuthorTrackFilter(e.target.value));
  };

  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        value={nameTrackFilter}
        onChange={handleNameAndAuthorTrackChange}
      />
    </S.CenterblockSearch>
  );
}

export default SearchInput;
