/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import * as S from '../../components/Main/SectionMusicList/SectionMusicList.styles';
import { CenterBlockHeading } from '../../components/Main/CenterBlockFilter/CenterBlockFilter.styles';
import ItemPlaylist from '../../components/UI/ItemPlaylist/ItemPlaylist';
import bonesTracks from '../../data/tracks';
import { tracksAPI } from '../../services/GetAccessTokenService';
import { selectNameTrackFilter } from '../../redux/slices/filterSlice/filterSlice';

function Favorites() {
  const {
    data: favoritesTracks,
    error,
    isLoading: loadingFavorites,
  } = tracksAPI.useFetchAllFavoritesTrackQuery();

  const nameTrackFilter = useSelector(selectNameTrackFilter);

  const filteredTracks = favoritesTracks?.filter((track) => {
    const matchesNameTrack = track.name
      .toLowerCase()
      .includes(nameTrackFilter.toLowerCase());
    return matchesNameTrack;
  });

  return (
    <S.CenterBlockContent>
      <CenterBlockHeading>Мои треки</CenterBlockHeading>
      <S.ContentTitle>
        <S.Col01>Трек</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.ContentTitle>
      {error ? (
        <CenterBlockHeading style={{ fontSize: '32px', height: '1680px' }}>
          Ошибка загрузки треков, перезагрузите страницу или проверьте интернет
          соединение
        </CenterBlockHeading>
      ) : (
        <S.ContentPlaylist>
          {error}
          {loadingFavorites && filteredTracks === undefined
            ? bonesTracks?.map((track) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <ItemPlaylist
                  loadingFavorites={loadingFavorites}
                  {...track}
                  key={track.id}
                />
              ))
            : filteredTracks?.map((track) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <ItemPlaylist
                  tracks={favoritesTracks}
                  loadingFavorites={loadingFavorites}
                  {...track}
                  key={track.id}
                />
              ))}
        </S.ContentPlaylist>
      )}
    </S.CenterBlockContent>
  );
}

export default Favorites;
