function ButtonFilter(props) {
  const { children } = props;
  return (
    <div className="filter__button button-author _btn-text">{children}</div>
  );
}

export default ButtonFilter;
