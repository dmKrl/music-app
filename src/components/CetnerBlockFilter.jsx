import './CetnerBlockFilter.css';
import ButtonFilter from './UI/ButtonFilter';

function CetnerBlockFilter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <ButtonFilter>Исполнителю</ButtonFilter>
      <ButtonFilter>Году выпуска</ButtonFilter>
      <ButtonFilter>Жанру</ButtonFilter>
    </div>
  );
}
export default CetnerBlockFilter;
