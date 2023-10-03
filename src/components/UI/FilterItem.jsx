import ButtonFilter from './ButtonFilter';
import PopupFilter from './PopupFilter';

function FilterItem(props) {
  const { onClick, visibility, children, id, artists } = props;

  return (
    <div className="filter-item">
      <ButtonFilter onClick={onClick}>{children}</ButtonFilter>
      {visibility && <PopupFilter id={id} artist={artists} />}
    </div>
  );
}

export default FilterItem;
