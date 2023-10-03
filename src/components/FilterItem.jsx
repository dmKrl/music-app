import ButtonFilter from './UI/ButtonFilter';
import PopupFilter from './UI/PopupFilter';

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
