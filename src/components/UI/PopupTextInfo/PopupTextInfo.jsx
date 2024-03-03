/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import * as S from '../../Main/CenterBlockFilter/CenterBlockFilter.styles';

function PopupTextInfo(props) {
  const { isActive, setIsActive } = useState();
  const handleChangeState = () => {
    props.onClick();
    setIsActive(!isActive);
  };

  return (
    <>
      {isActive ? (
        <S.PopupTextActive key={props.id} onClick={() => handleChangeState()}>
          {props.genreTrack}
        </S.PopupTextActive>
      ) : (
        <S.PopupTextInfo key={props.id} onClick={() => handleChangeState()}>
          {props.genreTrack}
        </S.PopupTextInfo>
      )}
    </>
  );
}

export default PopupTextInfo;
