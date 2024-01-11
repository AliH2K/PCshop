import { ShopContext } from './shopContext';
import React, { useContext } from 'react';
import { GetProductData } from '../resources/products';
import { CartImageComp, CartItemChangeComp, CartProductComp, CartQuanChangeBtnComp, DeleteFromCartBtnComp } from '../styles/cartProductStyles';
import { CartProductProps } from '../types/types';

export const CartProduct: React.FC<CartProductProps> = ({ id, quantity }) => {
  const cart = useContext(ShopContext);
  const productData = GetProductData(id);

  return (
    <>
      <CartProductComp>
        <CartImageComp src={'./' + id + '.png'} />
        <h3 style={{ flex: 1 }}>{productData.name}</h3>
        <CartItemChangeComp style={{ color: 'rgb(204, 0, 0)' }}>
          <CartQuanChangeBtnComp onClick={() => cart.addOneToCart(id)}>+</CartQuanChangeBtnComp>
          <p>{quantity} in cart</p>
          <CartQuanChangeBtnComp onClick={() => cart.removeOneFromCart(id)}>-</CartQuanChangeBtnComp>
        </CartItemChangeComp>
        <p style={{ flex: 1 }}>{(quantity * productData.price).toFixed(2)} $</p>
        <DeleteFromCartBtnComp onClick={() => cart.deleteFromCart(id)}>Remove</DeleteFromCartBtnComp>
      </CartProductComp>
    </>
  );
};
