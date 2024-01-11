import { Home } from './components/home';
import { Shop } from './components/shop';
import React from 'react';
import { ShopProvider } from './components/shopContext';

export const App = () => {
  return (
    <ShopProvider>
      <Home />
      <Shop />
    </ShopProvider>
  );
};
