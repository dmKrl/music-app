/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './MediaPlayer.styles.';
import ProgressBar from '../ProgressBar/ProgressBar';
import { selectTracks } from '../../redux/slices/tracksSlice';

function MediaPlayer() {
  const dataTrack = useSelector(selectTracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
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
    return () => {
      audioRef.current.removeEventListener('loadedmetadata', () => {
        changeDuration();
      });
      audioRef.current.removeEventListener('timeupdate', () => {
        changeCurrentTime();
      });
    };
  }, [dataTrack.track_file]);
  return (
    <>
      <audio
        src={dataTrack.track_file}
        controls
        ref={audioRef}
        loop={isLoop}
        style={{ visibility: 'hidden' }}
      />
      <S.Bar>
        <S.BarContent>
          <ProgressBar
            currentTime={currentTime}
            audioRef={audioRef}
            duration={duration}
            setCurrentTime={setCurrentTime}
          />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayersControls>
                <S.PlayerBtnPrev onClick={() => alert('В разработке..')}>
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
                <S.PlayerBtnNext onClick={() => alert('В разработке..')}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg
                    alt="repeat"
                    onClick={() => setIsLoop(!isLoop)}
                  >
                    {isLoop ? (
                      <use xlinkHref="img/icon/sprite.svg#icon-repeatA" />
                    ) : (
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    )}
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
                      {dataTrack.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {dataTrack.author}
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
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                    step={0.01}
                    value={volume}
                    max={1}
                    onChange={(event) => {
                      audioRef.current.volume = event.target.value;
                      setVolume(event.target.value);
                    }}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarPlayerBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}

export default MediaPlayer;
