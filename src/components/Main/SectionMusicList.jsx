/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import ItemPlaylist from '../UI/ItemPlaylist';
import * as S from './SectionMusicList.styles';
import bonesTracks from '../../data/tracks';
import { tracksAPI } from '../../services/GetAccessTokenService';
import { selectNameTrackFilter } from '../../redux/slices/filterSlice';

function SectionMusicList() {
  const {
    data: allTracks,
    isLoading,
    error,
  } = tracksAPI.useFetchAllTracksQuery();
  const nameTrackFilter = useSelector(selectNameTrackFilter);

  const filteredTracks = allTracks?.filter((track) => {
    const matchesNameTrack = track.name
      .toLowerCase()
      .includes(nameTrackFilter.toLowerCase());
    return matchesNameTrack;
  });

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
              <ItemPlaylist
                nameTrackFilter={nameTrackFilter}
                {...track}
                isLoading={isLoading}
                key={track.id}
              />
            ))
          : filteredTracks?.map((track) => (
              <ItemPlaylist
                allTracks={allTracks}
                isLoading={isLoading}
                {...track}
                key={track.id}
              />
            ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default SectionMusicList;
