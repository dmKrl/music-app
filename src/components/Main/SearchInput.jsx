import * as S from './SearchInput.styles';

function SearchInput() {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  );
}

export default SearchInput;
