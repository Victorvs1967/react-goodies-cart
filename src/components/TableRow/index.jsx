import Count from './../Count';
import DeleteBtn from './../DeleteBtn';
import priceFormatter from './../../utils/priceFormatter';

import './style.sass';

const TableRow = ({ goodie, deleteGoogie, incrise, decrise, changeValue }) => {

  const { id, name, image, priceTotal, count } = goodie;
  
  return (
    <div className="section-cart__table_row">
      <img className="section-cart__table_row-img" src={`./images/${ image }`} alt={ name } />
      <span className="section-cart__table_row-name">{ name }</span>
      <Count
        id={ id }
        count={ count }
        incrise={ incrise }
        decrise={ decrise }
        changeValue={ changeValue }
      />
      <span>$<span className="section-cart__table_row-price">{ priceFormatter(priceTotal) }</span></span>
      <DeleteBtn id={ id } deleteGoogie={ deleteGoogie } />
    </div>
  );
}

export default TableRow;