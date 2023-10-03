import filters from '../../data/filters';

function ButtonFilter() {
  return (
    <>
      {filters.map((filter) => (
        <button
          className="filter__button button-author _btn-text"
          type="button"
        >
          {filter.buttonName}
        </button>
      ))}
    </>
  );
}

export default ButtonFilter;
