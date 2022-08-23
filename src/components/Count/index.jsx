import './style.sass';

const Count = ({ id, count, incrise, decrise, changeValue }) => (
  <div className="section-cart__table_row-count">
    <div className="section-cart__table_row-count__box">
      <input 
        className="section-cart__table_row-count__input" 
        type="number" 
        min={ 1 } 
        max={ 50 } 
        value={ count } 
        onChange={event => changeValue(id, +event.target.value) } 
      />
    </div>
    <div className="section-cart__table_row-controls">
      <button className="section-cart__table_row-controls-up" type="button" onClick={ () => incrise(id) }>
        <svg className="section-cart__table_row-controls-icon">
          <use className="icon__up-arrow" xlinkHref="./icons/icons.svg#up-arrow" />
        </svg>
      </button>
      <button className="section-cart__table_row-controls-down" type="button" onClick={ () => decrise(id) }>
        <svg className="section-cart__table_row-controls-icon">
          <use className="icon__down-arrow" xlinkHref="./icons/icons.svg#down-arrow" />
        </svg>
      </button>
    </div>
  </div>
);

export default Count;