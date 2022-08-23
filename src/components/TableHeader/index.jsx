import './style.sass';

const TableHeader = () => (  
  <div className="section-cart__table_header">
    <span className="section-cart__table_header-name">name</span>
    <span className="section-cart__table_header-count">count</span>
    <span className="section-cart__table_header-price">price</span>
  </div>
);

export default TableHeader;