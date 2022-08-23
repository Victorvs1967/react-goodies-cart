import { useState, useEffect } from 'react';

import TableHeader from './../TableHeader';
import TableRow from './../TableRow';
import TableFooter from './../TableFooter';
import goodies from './../../data';

import './style.sass';

const Table = () => {

  const [ table, setTable ] = useState(
    goodies.map(goodie => 
      ({ 
        ...goodie, 
        priceTotal: goodie.price * goodie.count,
      })
    )
  );

  const [ totals, setTotals ] = useState(
    {
      totalPrice: table.reduce((prev, curr) => prev + curr.priceTotal, 0),
      totalCount: table.reduce((prev, curr) => prev + curr.count, 0),
    }
  );

  useEffect(() => setTotals(
    {
      totalPrice: table.reduce((prev, curr) => prev + curr.priceTotal, 0),
      totalCount: table.reduce((prev, curr) => prev + curr.count, 0),
    }
  ), [table]);

  const incrise = id => setTable(table => 
    table.map(goodie => 
      goodie.id === id ? 
      {
        ...goodie,
        count: ++goodie.count, 
        priceTotal: goodie.price * goodie.count,
      } : 
      goodie)
  );

  const decrise = id => setTable(table => 
    table.map(goodie => 
      goodie.id === id ? 
      { 
        ...goodie,
        count: goodie.count > 1 ? --goodie.count : goodie.count, 
        priceTotal: goodie.price * goodie.count,
      } : 
      goodie)
  );

  const changeValue = (id, value) => setTable(table => 
    table.map(goodie => 
      id === goodie.id ? 
      { 
        ...goodie, 
        count: value,
        priceTotal: goodie.price * value,
      } : 
      goodie)
  );

  const deleteGoogie = id => setTable(table => 
    table.filter(goodie => id !== goodie.id)
  );

  return (
    <div className="section-cart__table">
      <TableHeader />
      { table.map( 
          goodie => 
            <TableRow 
              key={ goodie.id } 
              goodie={ goodie } 
              deleteGoogie={ deleteGoogie } 
              incrise={ incrise }
              decrise={ decrise }
              changeValue={ changeValue }
            />
      )}
      <TableFooter totals={ totals } />
    </div>
  );
}

export default Table;