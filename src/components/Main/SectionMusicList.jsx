import ItemPlaylist from '../UI/ItemPlaylist';
import * as S from './SectionMusicList.styles';
import bonesTracks from '../../data/tracks';
import { tracksAPI } from '../../services/tracksService';

function SectionMusicList() {
  const {
    data: allTracks,
    isLoading,
    error,
  } = tracksAPI.useFetchAllTracksQuery();

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
        {error}
        {isLoading
          ? bonesTracks.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist {...track} key={track.id} />
            ))
          : allTracks?.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist {...track} key={track.id} />
            ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default SectionMusicList;
