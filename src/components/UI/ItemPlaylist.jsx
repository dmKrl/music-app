/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as S from '../Main/SectionMusicList.styles';
import IsLoadingPageContext from '../../context/IsLoadingPageContext';
import MediaPlayerContext from '../../context/MediaPlayerContext';
import changeSecondsToMinutes from '../../app/changeSecondsToMinutes';
import {
  selectIsPlaying,
  selectTracks,
  setTrack,
} from '../../redux/slices/tracksSlice';
import UserData from '../../context/UserData';

function ItemPlaylist(props) {
  const { isLoading } = useContext(IsLoadingPageContext);
  const { changeIsShowing } = useContext(MediaPlayerContext);
  const { userInfo } = useContext(UserData);
  const track = useSelector(selectTracks);
  const isPlayingTrack = useSelector(selectIsPlaying);
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle
          onClick={() => {
            dispatch(
              location.pathname === '/favorites'
                ? setTrack({
                    name: props.name,
                    author: props.author,
                    track_file: props.track_file,
                    isFavorite: true,
                  })
                : setTrack({
                    name: props.name,
                    author: props.author,
                    track_file: props.track_file,
                  }),
            );
            changeIsShowing(true);
          }}
        >
          {track.name === props.name && !isLoading ? (
            <> {isPlayingTrack ? <S.PlayingDotActive /> : <S.PlayingDot />}</>
          ) : (
            ''
          )}
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
          <S.TrackTimeSvg alt="time" >
            {location.pathname === '/favorites' ||
            props?.stared_user?.find((user) => user.id === userInfo.id) ? (
              <use xlinkHref="img/icon/sprite.svg#icon-disLike" />
            ) : (
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            )}
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
