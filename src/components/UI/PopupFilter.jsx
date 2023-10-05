import './PopupFilter.css';

function PopupFilter(props) {
  const { track, id } = props;
  return (
    <div className={`popup-${id} popup`}>
      <div className="popup-text" id={id}>
        {track}
      </div>
    </div>
  );
}

export default PopupFilter;
