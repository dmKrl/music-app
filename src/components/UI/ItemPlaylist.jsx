import * as S from '../Main/SectionMusicList.styles';

function ItemPlaylist(props) {
  const { trackName, musician, album, time, loadingPage } = props;
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
            {loadingPage ? (
              <S.TrackAlbumLinkBones href="http://" />
            ) : (
              <S.TrackTitleLink href="http://">
                {trackName} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {loadingPage ? (
            <S.TrackAlbumLinkBones href="http://" />
          ) : (
            <S.TrackAuthorLink href="http://">{musician}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {loadingPage ? (
            <S.TrackAlbumLinkBones href="http://" />
          ) : (
            <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          {loadingPage ? (
            <S.TrackTimeText>00:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>{time}</S.TrackTimeText>
          )}
        </>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}

export default ItemPlaylist;
