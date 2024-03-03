import {
  Popup,
  PopupText,
} from '../../Main/CenterBlockFilter/CenterBlockFilter.styles';

function PopupFilter(props) {
  const { track, id } = props;

  return (
    <Popup>
      <PopupText id={id}>{track}</PopupText>
    </Popup>
  );
}

export default PopupFilter;
