import ButtonFilter from './ButtonFilter';
import PopupFilter from './PopupFilter';
import { StyleFilterItem } from '../Main/CenterBlockFilter.styles';

function FilterItem(props) {
  const { onClick, isOpen, children, id, tracks } = props;

  return (
    <StyleFilterItem>
      <ButtonFilter onClick={onClick}>{children}</ButtonFilter>
      {isOpen && <PopupFilter id={id} track={tracks} />}
    </StyleFilterItem>
  );
}

export default FilterItem;
