import priceFormatter from './../../utils/priceFormatter';
import './style.sass';

const TableFooter = ({ totals }) => {
  const { totalCount, totalPrice } = totals;

  return (
    <div className="section-cart__table_footer">
      <span className="section-cart__table_footer-count">{ totalCount }</span>
      <span className="section-cart__table_footer-total">{ priceFormatter(totalPrice) }</span>
    </div>
  );
};

export default TableFooter;