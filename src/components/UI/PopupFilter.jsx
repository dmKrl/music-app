import './PopupFilter.css';

function PopupFilter(props) {
  const { artist, id } = props;
  return (
    <div className={`popup-${id} popup`}>
      <div className="popup-text" id={id}>
        {artist}
      </div>
    </div>
  );
}

export default PopupFilter;
