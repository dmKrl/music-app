import { Popup, PopupText } from '../Main/CenterBlockFilter.styles';

function PopupFilter(props) {
  const { track, id } = props;
  return (
    <Popup className="popup">
      <PopupText className="popup-text" id={id}>
        {track}
      </PopupText>
    </Popup>
  );
}

export default PopupFilter;
