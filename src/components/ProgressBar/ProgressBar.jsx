import changeSecondsToMinutes from '../../app/changeSecondsToMinutes';
import * as S from '../MediaPlayer/MediaPlayer.styles.';

/* eslint-disable no-param-reassign */
function ProgressBar({ duration, currentTime, audioRef, setCurrentTime }) {
  return (
    <S.ProgressBarBlock>
      <S.ProgressBarTimes>
        <S.ProgressBarTimesItemLeft>
          {changeSecondsToMinutes(currentTime)}
        </S.ProgressBarTimesItemLeft>
        <S.ProgressBarTimesItemRight>
          {changeSecondsToMinutes(duration)}
        </S.ProgressBarTimesItemRight>
      </S.ProgressBarTimes>
      <S.BarPlayerProgress
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => {
          audioRef.current.currentTime = event.target.value;
          setCurrentTime(event.target.value);
        }}
        $color="#514ED9"
      />
    </S.ProgressBarBlock>
  );
}

export default ProgressBar;
