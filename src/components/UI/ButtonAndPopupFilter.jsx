import filters from '../../data/filters';
import './ButtonAndPopupFilter.css';

function ButtonAndPopupFilter() {
  return (
    <>
      {filters.map((filter) => (
        <div key={filter.id}>
          <button
            className="filter__button button-author _btn-text"
            type="button"
          >
            {filter.buttonName}
          </button>
          <div className={`popup-${filter.id} popup`}>
            {filter.info.map((about) => (
              <p className="popup-text" key={about.identificator}>
                {about.discription}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ButtonAndPopupFilter;
