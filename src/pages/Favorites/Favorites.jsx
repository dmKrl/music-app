import { useContext } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../components/Main/SectionMusicList.styles';
import { CenterBlockHeading } from '../../components/Main/CenterBlockFilter.styles';
import ItemPlaylist from '../../components/UI/ItemPlaylist';
import IsLoadingPageContext from '../../context/IsLoadingPageContext';
import tracks from '../../data/tracks';
import { selectFavoritesTracks } from '../../redux/slices/favoritesTracksSlice';

function Favorites() {
  const { isLoading, isLoadingError } = useContext(IsLoadingPageContext);
  const favoritesTracks = useSelector(selectFavoritesTracks);

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
      <S.ContentPlaylist>
        {isLoadingError}
        {isLoading
          ? tracks.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist {...track} key={track.id} />
            ))
          : favoritesTracks.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist {...track} key={track.id} />
            ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default Favorites;
