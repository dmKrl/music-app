import { useContext } from 'react';
import * as S from '../Main/SectionMusicList.styles';
import IsLoadingPageContext from '../../context/IsLoadingPageContext';

function ItemPlaylist(props) {
  const { isLoading } = useContext(IsLoadingPageContext);
  function secondsToMinutes(s) {
    return (s / 60).toFixed(2);
  }
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImg>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImg>
          <div>
            {isLoading ? (
              <S.TrackAlbumLinkBones href="http://" />
            ) : (
              <S.TrackTitleLink href="http://">
                {props.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {isLoading ? (
            <S.TrackAlbumLinkBones href="http://" />
          ) : (
            <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {isLoading ? (
            <S.TrackAlbumLinkBones href="http://" />
          ) : (
            <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          {isLoading ? (
            <S.TrackTimeText>00:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>
              {secondsToMinutes(props.duration_in_seconds)}
            </S.TrackTimeText>
          )}
        </>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}

export default ItemPlaylist;
