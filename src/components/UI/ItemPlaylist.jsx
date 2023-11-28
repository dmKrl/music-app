/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as S from '../Main/SectionMusicList.styles';
import MediaPlayerContext from '../../context/MediaPlayerContext';
import changeSecondsToMinutes from '../../app/changeSecondsToMinutes';
import {
  selectIsPlaying,
  selectTracks,
  setTrack,
  setArrayTracks,
} from '../../redux/slices/tracksSlice';
import UserData from '../../context/UserData';
import { tracksAPI } from '../../services/GetAccessTokenService';

function ItemPlaylist(props) {
  const { changeIsShowing } = useContext(MediaPlayerContext);
  const { userInfo } = useContext(UserData);
  const track = useSelector(selectTracks);
  const isPlayingTrack = useSelector(selectIsPlaying);
  const { data: allTracks, isLoading } = tracksAPI.useFetchAllTracksQuery();
  const { data: favoritesTracks, isLoading: loadingFavorites } =
    tracksAPI.useFetchAllFavoritesTrackQuery();
  const { data: categoryTracks, isLoading: loadingCollection } =
    tracksAPI.useFetchAllCollectionTracksQuery(props.categoryId);
  const [addLikeTrack] = tracksAPI.useAddLikeTrackMutation();
  const [deleteLikeTrack] = tracksAPI.useDeleteLikeTrackMutation();
  const location = useLocation();
  const dispatch = useDispatch();

  function toggleLikedTrack() {
    if (
      props?.stared_user?.find((user) => user.id === userInfo.id) ||
      location.pathname === '/favorites'
    ) {
      deleteLikeTrack(props.id);
    } else {
      addLikeTrack(props.id);
    }
  }

  function changeTrackInPlayer() {
    if (location.pathname === '/favorites') {
      return {
        name: props.name,
        author: props.author,
        track_file: props.track_file,
        id: props.id,
        isFavorite: true,
      };
    }
    return {
      name: props.name,
      author: props.author,
      track_file: props.track_file,
      arrayStaredUser: props.stared_user,
      id: props.id,
    };
  }

  function changeStateTrackSlice() {
    dispatch(setTrack(changeTrackInPlayer()));
    changeIsShowing(true);
    if (location.pathname === '/') {
      dispatch(setArrayTracks(allTracks));
    }
    if (location.pathname === '/favorites') {
      dispatch(setArrayTracks(favoritesTracks));
    }
    if (
      location.pathname === '/category/1' ||
      location.pathname === '/category/2' ||
      location.pathname === '/category/3'
    ) {
      dispatch(setArrayTracks(categoryTracks.items));
    }
  }

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle onClick={() => changeStateTrackSlice()}>
          <S.TrackTitleImg>
            {(track.name === props.name && !isLoading) ||
            loadingFavorites ||
            loadingCollection ? (
              <> {isPlayingTrack ? <S.PlayingDotActive /> : <S.PlayingDot />}</>
            ) : (
              ''
            )}
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImg>
          <div>
            {isLoading || loadingFavorites || loadingCollection ? (
              <S.TrackAlbumLinkBones />
            ) : (
              <S.TrackTitleLink>
                {props.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {isLoading || loadingFavorites || loadingCollection ? (
            <S.TrackAlbumLinkBones />
          ) : (
            <S.TrackAuthorLink>{props.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {isLoading || loadingFavorites || loadingCollection ? (
            <S.TrackAlbumLinkBones />
          ) : (
            <S.TrackAlbumLink>{props.album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <>
          <S.TrackBlockTimeSvg onClick={() => toggleLikedTrack()}>
            <S.TrackTimeSvg alt="time">
              {location.pathname === '/favorites' ||
              props?.stared_user?.find((user) => user.id === userInfo.id) ? (
                <use xlinkHref="/img/icon/sprite.svg#icon-like-active" />
              ) : (
                <use xlinkHref="/img/icon/sprite.svg#icon-like-no-active" />
              )}
            </S.TrackTimeSvg>
          </S.TrackBlockTimeSvg>
          {isLoading || loadingFavorites || loadingCollection ? (
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
