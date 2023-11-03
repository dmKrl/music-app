/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import * as S from '../Main/SectionMusicList.styles';
import IsLoadingPageContext from '../../context/IsLoadingPageContext';
import MediaPlayerContext from '../../context/MediaPlayerContext';
import changeSecondsToMinutes from '../../app/changeSecondsToMinutes';
import { setTrack } from '../../redux/slices/tracksSlice';

function ItemPlaylist(props) {
  const { isLoading } = useContext(IsLoadingPageContext);
  const { changeIsShowing } =
    useContext(MediaPlayerContext);
  const dispatch = useDispatch();
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack
        onClick={() => {
          dispatch(
            setTrack({
              name: props.name,
              author: props.author,
              track_file: props.track_file,
            }),
          );
          changeIsShowing(true);
        }}
      >
        <S.TrackTitle>
          <S.TrackTitleImg>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImg>
          <div>
            {isLoading ? (
              <S.TrackAlbumLinkBones />
            ) : (
              <S.TrackTitleLink>
                {props.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {isLoading ? (
            <S.TrackAlbumLinkBones />
          ) : (
            <S.TrackAuthorLink>{props.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {isLoading ? (
            <S.TrackAlbumLinkBones />
          ) : (
            <S.TrackAlbumLink>{props.album}</S.TrackAlbumLink>
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
              {changeSecondsToMinutes(props.duration_in_seconds)}
            </S.TrackTimeText>
          )}
        </>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}

export default ItemPlaylist;
