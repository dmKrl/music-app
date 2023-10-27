/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useRef, useState, useEffect } from 'react';
import * as S from './BarPlayer.styles';
import BarPlayerContext from '../../context/BarPlayerContext';

function BarPlayer() {
  const { showInfoAboutTrack } = useContext(BarPlayerContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  // const [volume, setVolume] = useState(null);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(2);
  const handleStartTrack = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handlePauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const changeDuration = () => {
    setDuration(Math.floor(audioRef.current.duration));
  };
  const changeCurrentTime = () => {
    setCurrentTime(Math.floor(audioRef.current.currentTime));
  };
  useEffect(() => {
    handleStartTrack();
    audioRef.current.addEventListener('loadedmetadata', () => {
      changeDuration();
    });
    audioRef.current.addEventListener('timeupdate', () => {
      changeCurrentTime();
    });

    // console.log(audioRef);
  }, [showInfoAboutTrack.track_file]);
  return (
    <S.Bar>
        <audio
          src={showInfoAboutTrack.track_file}
          controls
          ref={audioRef}
          // style={{ visibility: 'hidden' }}
        />
      <S.BarContent>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={(event) => setCurrentTime(event.target.value)}
          $color="#ff0000"
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayersControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg
                  alt="play"
                  onClick={isPlaying ? handlePauseTrack : handleStartTrack}
                >
                  {isPlaying ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-pause" />
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayersControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    {showInfoAboutTrack.name}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    {showInfoAboutTrack.author}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlaySvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackPlaySvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarPlayerBlock>
            <S.VolumeContent>
              <S.VolumeImg>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarPlayerBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}

export default BarPlayer;
