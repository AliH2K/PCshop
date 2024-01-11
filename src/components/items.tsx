import { Products } from '../resources/products';
import { ItemComp, ItemsComp, PriceRangeComp, SidePanelComp } from '../styles/itemsStyles';
import { productDataType } from '../types/types';
import { ItemCard } from './itemCard';
import React, { useState } from 'react';

export const Items = () => {
  const [productList, setProductList] = useState<Array<productDataType>>(Products);

  const changePriceRange = (range1: number, range2: number) => {
    setProductList(Products.filter((product) => product.price > range1 && product.price < range2));
  };

  return (
    <>
      <SidePanelComp>
        <h4>Price Range:</h4>
        <PriceRangeComp onClick={() => setProductList(Products)}>All Items</PriceRangeComp>
        <PriceRangeComp onClick={() => changePriceRange(0, 1000)}>0$ - 1000$</PriceRangeComp>
        <PriceRangeComp onClick={() => changePriceRange(1000, 2000)}>1000$ - 2000$</PriceRangeComp>
        <PriceRangeComp onClick={() => changePriceRange(2000, 3000)}>2000$ - 3000$</PriceRangeComp>
        <PriceRangeComp onClick={() => changePriceRange(3000, 4000)}>3000$ - 4000$</PriceRangeComp>
      </SidePanelComp>
      <ItemsComp>
        {productList.map((product, idx) => (
          <ItemComp key={idx}>
            <ItemCard {...product} />
          </ItemComp>
        ))}
      </ItemsComp>
    </>
  );
};
