import { useDispatch, useSelector } from 'react-redux';
import { arrayAuthors, arrayDate, arrayGenre } from '../../data/tracks';
import FilterItem from '../UI/FilterItem';
import * as S from './CenterBlockFilter.styles';
import {
  selectSortTrackFilter,
  setAuthorTrackFilter,
  setGenreTrackFilter,
  setSortTrackFilter,
  deleteAuthorTrackFilter,
  deleteGenreTrackFilter,
  selectAuthorTrackFilter,
  selectGenreTrackFilter,
} from '../../redux/slices/filterSlice';

function CenterBlockFilter({ onClick, activeFilter }) {
  const dispatch = useDispatch();
  const sortTrackFilter = useSelector(selectSortTrackFilter);
  const authorTrackFilter = useSelector(selectAuthorTrackFilter);
  const genreTrackFilter = useSelector(selectGenreTrackFilter);
  console.log(sortTrackFilter);
  const handleAuthorTrackFilter = (authorTrack) => {
    if (authorTrackFilter.includes(authorTrack)) {
      dispatch(deleteAuthorTrackFilter(authorTrack));
    } else {
      dispatch(setAuthorTrackFilter(authorTrack));
    }
  };
  const handleGenreTrackFilter = (genreTrack) => {
    if (genreTrackFilter.includes(genreTrack)) {
      dispatch(deleteGenreTrackFilter(genreTrack));
    } else {
      dispatch(setGenreTrackFilter(genreTrack));
    }
  };

  return (
    <>
      <S.CenterBlockHeading>Треки</S.CenterBlockHeading>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <FilterItem
          onClick={() => onClick('musician')}
          isOpen={activeFilter === 'musician'}
          id="1"
          authorTrackFilter={authorTrackFilter}
          tracks={arrayAuthors.map((author) => (
            <S.PopupTextInfo
              $isActive={author.nameAuthor.includes(
                authorTrackFilter.find(
                  (authorFilter) => authorFilter === author.nameAuthor,
                ),
              )}
              key={author.id}
              onClick={() => handleAuthorTrackFilter(author.nameAuthor)}
            >
              {author.nameAuthor}
            </S.PopupTextInfo>
          ))}
        >
          исполнителю
        </FilterItem>
        <FilterItem
          onClick={() => onClick('genre')}
          isOpen={activeFilter === 'genre'}
          id="3"
          genreTrackFilter={genreTrackFilter}
          tracks={arrayGenre.map((genre) => (
            <S.PopupTextInfo
              key={genre.id}
              $isActive={genre.genreTrack.includes(
                genreTrackFilter.find(
                  (genreFilter) => genreFilter === genre.genreTrack,
                ),
              )}
              onClick={() => handleGenreTrackFilter(genre.genreTrack)}
            >
              {genre.genreTrack}
            </S.PopupTextInfo>
          ))}
        >
          жанру
        </FilterItem>
        <S.FilterTitle style={{ marginLeft: '400px' }}>
          Сортировка:
        </S.FilterTitle>
        <FilterItem
          style={{ position: 'absolute', right: 0 }}
          onClick={() => onClick('year')}
          isOpen={activeFilter === 'year'}
          id="2"
          sortTrackFilter={sortTrackFilter}
          tracks={arrayDate.map((date) => (
            <S.PopupTextInfo
              key={date.id}
              $isActive={date.dateTrack === sortTrackFilter.sort}
              onClick={() => dispatch(setSortTrackFilter(date.dateTrack))}
            >
              {date.dateTrack}
            </S.PopupTextInfo>
          ))}
        >
          {!sortTrackFilter.sort ? 'по умолчанию' : sortTrackFilter.sort}
        </FilterItem>
      </S.CenterBlockFilter>
    </>
  );
}
export default CenterBlockFilter;
