import React, { createContext, useState } from 'react';
import { GetProductData } from '../resources/products';
import { ShopContextType } from '../types/types';

export const ShopContext = createContext<ShopContextType>({} as ShopContextType);

export const ShopProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<Array<{ id: number; quantity: number }>>([]);
  const [showShop, setShowShop] = useState(false);

  function getProductQuantity(id: number) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)));
    }
  }

  function removeOneFromCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product)));
    }
  }

  function deleteFromCart(id: number) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = GetProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    showShop: showShop,
    items: cartProducts,
    setShowShop: setShowShop,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};
