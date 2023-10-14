import tracks from '../../data/tracks';
import ItemPlaylist from '../UI/ItemPlaylist';
import * as S from './SectionMusicList.styles';

function SectionMusicList({ loadingPage }) {
  // Здесь по хорошему мы должны получать GET запрос и выводить данные, например через map
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
        {tracks.map((track) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ItemPlaylist {...track} key={track.id} loadingPage={loadingPage} />
        ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default SectionMusicList;
