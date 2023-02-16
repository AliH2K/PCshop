import { Products, B0k1k, B1k2k, B2k3k, B3k4k } from '../resources/products';
import ItemCard from './itemCard';
import { useState } from 'react';

function Items() {
  const [productList, setProductList] = useState(Products);

  return (
    <>
      <div className='side'>
        <ul>
          <li className='priceRange'>
            Price Range:
            <ul>
              <li onClick={() => setProductList(Products)}>All Items</li>
              <li onClick={() => setProductList(B0k1k)}>0$ - 1000$</li>
              <li onClick={() => setProductList(B1k2k)}>1000$ - 2000$</li>
              <li onClick={() => setProductList(B2k3k)}>2000$ - 3000$</li>
              <li onClick={() => setProductList(B3k4k)}>3000$ - 4000$</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='items'>
        {productList.map((product, idx) => (
          <div key={idx} className='item'>
            <ItemCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
