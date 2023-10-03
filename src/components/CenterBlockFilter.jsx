import './CenterBlockFilter.css';
import ButtonAndPopupFilter from './UI/ButtonAndPopupFilter';

function CenterBlockFilter() {
  return (
    <>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <ButtonAndPopupFilter />
      </div>
    </>
  );
}
export default CenterBlockFilter;
