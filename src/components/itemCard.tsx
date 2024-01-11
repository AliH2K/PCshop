import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from './shopContext';
import React, { useContext } from 'react';
import { AddCartBtnComp, AddRemoveBtnComp, AddRemoveComp, InfoComp, ItemQuantityComp, PicComp, PicContainerComp, SpecsComp, SpecsInfoComp, SpecsNameComp, SpecsTextComp } from '../styles/itemCardStyles';
import { productDataType } from '../types/types';

export const ItemCard = (product: productDataType) => {
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
      <PicContainerComp>
        <PicComp src={'./' + product.id + '.png'} alt="." />
      </PicContainerComp>
      <InfoComp>
        <span>{product.name}</span>
        <br />
        <span>{product.price} $</span>
      </InfoComp>
      <AddRemoveComp>
        {productQuantity > 0 ? (
          <>
            <AddRemoveBtnComp onClick={() => cart.addOneToCart(product.id)}>+</AddRemoveBtnComp>
            <ItemQuantityComp>{productQuantity}</ItemQuantityComp>
            <AddRemoveBtnComp onClick={() => cart.removeOneFromCart(product.id)}>-</AddRemoveBtnComp>
          </>
        ) : (
          <AddCartBtnComp onClick={() => cart.addOneToCart(product.id)}>
            <FontAwesomeIcon icon={faCartPlus} size="lg" />
          </AddCartBtnComp>
        )}
      </AddRemoveComp>
      <SpecsComp>
        <SpecsTextComp>SPECS</SpecsTextComp>
        <SpecsInfoComp>
          <SpecsNameComp>GPU:</SpecsNameComp>
          <h4>{product.gpu}</h4>
        </SpecsInfoComp>
        <SpecsInfoComp>
          <SpecsNameComp>CPU:</SpecsNameComp>
          <h4>{product.cpu}</h4>
        </SpecsInfoComp>
        <SpecsInfoComp>
          <SpecsNameComp>RAM:</SpecsNameComp>
          <h4>{product.ram} GBs</h4>
        </SpecsInfoComp>
        <SpecsInfoComp>
          <SpecsNameComp>HDD:</SpecsNameComp>
          <h4>{product.hdd} GBs</h4>
        </SpecsInfoComp>
        <SpecsInfoComp>
          <SpecsNameComp>SSD:</SpecsNameComp>
          <h4>{product.ssd} GBs</h4>
        </SpecsInfoComp>
      </SpecsComp>
    </>
  );
};
