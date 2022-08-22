import './style.sass';

const Table = () => (
  <div className="section-cart__table">
    <div className="section-cart__table_header"><span className="section-cart__table_header-name">name</span><span className="section-cart__table_header-count">count</span><span className="section-cart__table_header-price">price</span></div>
    <div className="section-cart__table_row"><img className="section-cart__table_row-img" src="./images/macbook.jpg" alt="Apple MacBook Air 13" /><span className="section-cart__table_row-name">Apple MacBook Air 13</span>
      <div className="section-cart__table_row-count">
        <div className="section-cart__table_row-count__box">
          <input className="section-cart__table_row-count__input" type="number" min={1} max={50} defaultValue={1} />
        </div>
        <div className="section-cart__table_row-controls">
          <button className="section-cart__table_row-controls-up" type="button">
            <svg className="section-cart__table_row-controls-icon">
              <use className="icon__up-arrow" xlinkHref="./icons/icons.svg#up-arrow" />
            </svg>
          </button>
          <button className="section-cart__table_row-controls-down" type="button">
            <svg className="section-cart__table_row-controls-icon">
              <use className="icon__down-arrow" xlinkHref="./icons/icons.svg#down-arrow" />
            </svg>
          </button>
        </div>
      </div>
      <span>$<span className="section-cart__table_row-price">2000</span></span>
      <button className="close-control" type="button">
        <span className="close-control__item" />
      </button>
    </div>
    <div className="section-cart__table_row"><img className="section-cart__table_row-img" src="./images/mac-pro.jpg" alt="Mac Pro" /><span className="section-cart__table_row-name">Mac Pro</span>
      <div className="section-cart__table_row-count">
        <div className="section-cart__table_row-count__box">
          <input className="section-cart__table_row-count__input" type="number" min={1} max={50} defaultValue={1} />
        </div>
        <div className="section-cart__table_row-controls">
          <button className="section-cart__table_row-controls-up" type="button">
            <svg className="section-cart__table_row-controls-icon">
              <use className="icon__up-arrow" xlinkHref="./icons/icons.svg#up-arrow" />
            </svg>
          </button>
          <button className="section-cart__table_row-controls-down" type="button">
            <svg className="section-cart__table_row-controls-icon">
              <use className="icon__down-arrow" xlinkHref="./icons/icons.svg#down-arrow" />
            </svg>
          </button>
        </div>
      </div><span>$<span className="section-cart__table_row-price">12000</span></span>
      <button className="close-control" type="button"><span className="close-control__item" /></button>
    </div>
    <div className="section-cart__table_row"><img className="section-cart__table_row-img" src="./images/watch.jpg" alt="Apple watch" /><span className="section-cart__table_row-name">Apple watch</span>
      <div className="section-cart__table_row-count">
        <div className="section-cart__table_row-count__box">
          <input className="section-cart__table_row-count__input" type="number" min={1} max={50} defaultValue={1} />
        </div>
        <div className="section-cart__table_row-controls">
          <button className="section-cart__table_row-controls-up" type="button">
            <svg className="section-cart__table_row-controls-icon">
              <use className="icon__up-arrow" xlinkHref="./icons/icons.svg#up-arrow" />
            </svg>
          </button>
          <button className="section-cart__table_row-controls-down" type="button">
            <svg className="section-cart__table_row-controls-icon">
              <use className="icon__down-arrow" xlinkHref="./icons/icons.svg#down-arrow" />
            </svg>
          </button>
        </div>
      </div><span>$<span className="section-cart__table_row-price">800</span></span>
      <button className="close-control" type="button"><span className="close-control__item" /></button>
    </div>
    <div className="section-cart__table_footer"><span className="section-cart__table_footer-count">3</span><span className="section-cart__table_footer-total">14800</span></div>
  </div>
);

export default Table;