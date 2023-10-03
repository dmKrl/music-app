import './CenterBlockFilter.css';
import ButtonFilter from './UI/ButtonFilter';

function CenterBlockFilter() {
  return (
    <>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <ButtonFilter />
      </div>
    </>
  );
}
export default CenterBlockFilter;
