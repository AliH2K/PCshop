import { Items } from './items';
import { Modal } from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { ShopContext } from './shopContext';
import { NavbarComp, ShopComp, ShopNavComp, ShopSecondNavComp } from '../styles/shopStyles';
import { ShopContextType } from '../types/types';

export const Shop = () => {
  const shop = useContext(ShopContext) as ShopContextType;

  return (
    <ShopComp data-show={shop.showShop}>
      <ShopNavComp>
        <NavbarComp>
          <FontAwesomeIcon style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={() => shop.setShowShop(false)} icon={faHouse} />
          <Modal />
        </NavbarComp>
      </ShopNavComp>
      <ShopSecondNavComp>
        <Items />
      </ShopSecondNavComp>
    </ShopComp>
  );
};
