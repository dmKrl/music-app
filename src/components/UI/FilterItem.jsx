import ButtonFilter from './ButtonFilter';
import PopupFilter from './PopupFilter';

function FilterItem(props) {
  const { onClick, visibility, children, id, tracks } = props;

  return (
    <div className="filter-item">
      <ButtonFilter onClick={onClick}>{children}</ButtonFilter>
      {visibility && <PopupFilter id={id} track={tracks} />}
    </div>
  );
}

export default FilterItem;
