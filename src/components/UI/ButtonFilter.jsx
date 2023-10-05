function ButtonFilter(props) {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="filter__button button-author _btn-text"
      type="button"
    >
      {children}
    </button>
  );
}

export default ButtonFilter;
