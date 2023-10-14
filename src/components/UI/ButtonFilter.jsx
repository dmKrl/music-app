import { FilterButton } from '../Main/CenterBlockFilter.styles';

function ButtonFilter(props) {
  const { children, onClick } = props;
  return (
    <FilterButton onClick={onClick} type="button">
      {children}
    </FilterButton>
  );
}

export default ButtonFilter;
