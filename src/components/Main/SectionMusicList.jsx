import { useContext } from 'react';
import { useSelector } from 'react-redux';
import ItemPlaylist from '../UI/ItemPlaylist';
import * as S from './SectionMusicList.styles';
import IsLoadingPageContext from '../../context/IsLoadingPageContext';
import bonesTracks from '../../data/tracks';
import { selectAllTracks } from '../../redux/slices/switchTracksSlice';
// import { tracksAPI } from '../../services/FavoritesTracksService';

function SectionMusicList() {
  const { isLoading, isLoadingError } = useContext(IsLoadingPageContext);
  const allTracks = useSelector(selectAllTracks);

  return (
    <S.CenterBlockContent>
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
          ? bonesTracks.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist {...track} key={track.id} />
            ))
          : allTracks.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist {...track} key={track.id} />
            ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default SectionMusicList;
