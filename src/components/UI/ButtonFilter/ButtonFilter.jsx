/* eslint-disable react/jsx-no-useless-fragment */
import {
  FilterButton,
  FilterButtonActive,
} from '../../Main/CenterBlockFilter/CenterBlockFilter.styles';

function ButtonFilter(props) {
  const { children, onClick, isOpen } = props;

  return (
    <>
      {isOpen ? (
        <FilterButtonActive onClick={onClick} type="button">
          {children}
        </FilterButtonActive>
      ) : (
        <FilterButton onClick={onClick} type="button">
          {children}
        </FilterButton>
      )}
    </>
  );
}

export default ButtonFilter;
