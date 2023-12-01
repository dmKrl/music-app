/* eslint-disable react/jsx-props-no-spreading */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../../components/Main/SectionMusicList.styles';
import { CenterBlockHeading } from '../../components/Main/CenterBlockFilter.styles';
import ItemPlaylist from '../../components/UI/ItemPlaylist';
import categories from '../../data/categories';
import NotFound from '../NotFound/NotFound';
import tracks from '../../data/tracks';
import { tracksAPI } from '../../services/GetAccessTokenService';
import { selectNameTrackFilter } from '../../redux/slices/filterSlice';

function Category() {
  const params = useParams();
  const category = categories.find((cat) => cat.id === params.id);
  const {
    data: collectionTracks,
    isLoading: loadingCollection,
    error,
  } = tracksAPI.useFetchAllCollectionTracksQuery(category.id);
  const nameTrackFilter = useSelector(selectNameTrackFilter);

  const filteredTracks = collectionTracks?.items?.filter((track) => {
    const matchesNameTrack = track.name
      .toLowerCase()
      .includes(nameTrackFilter.toLowerCase());
    return matchesNameTrack;
  });

  if (!category || Number(params.id) > 3) {
    return <NotFound />;
  }
  return (
    <S.CenterBlockContent>
      <CenterBlockHeading>{collectionTracks?.data?.name}</CenterBlockHeading>
      <S.ContentTitle>
        <S.Col01>Трек</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.ContentTitle>
      {error ? (
        <CenterBlockHeading style={{ fontSize: '32px' }}>
          Ошибка загрузки треков, перезагрузите страницу или проверьте интернет соединение
        </CenterBlockHeading>
      ) : (
        <S.ContentPlaylist>
          {!collectionTracks
            ? tracks.map((track) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <ItemPlaylist
                  {...track}
                  loadingCollection={loadingCollection}
                  key={track.id}
                />
              ))
            : filteredTracks?.map((track) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <ItemPlaylist
                  categoryId={category.id}
                  loadingCollection={loadingCollection}
                  collectionTracks={collectionTracks}
                  {...track}
                  key={track.id}
                />
              ))}
        </S.ContentPlaylist>
      )}
    </S.CenterBlockContent>
  );
}

export default Category;
