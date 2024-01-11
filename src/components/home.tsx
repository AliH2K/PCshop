import React, { useContext, useEffect, useState } from 'react';
import { BrandComp, BtnComp, CaseImageComp, CtaComp, HomeComp, IntroComp } from '../styles/homeStyles';
import { ShopContext } from './shopContext';
import { ShopContextType } from '../types/types';

export const Home = () => {
  const shop = useContext(ShopContext) as ShopContextType;
  const [show, setShow] = useState(false);
  const [homeShow, setHomeShow] = useState(true);

  useEffect(() => {
    if (shop.showShop)
      setTimeout(() => {
        setHomeShow(false);
      }, 780);
    else setHomeShow(true);
  }, [shop.showShop]);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <HomeComp data-show={homeShow}>
      <BrandComp>Overclocked</BrandComp>
      <IntroComp>
        <CtaComp data-show={show}>
          <h1>Need help buildng your dream pc?</h1>
          <h3>Leave it to us.</h3>
          <BtnComp onClick={() => shop.setShowShop(true)}>Shop</BtnComp>
        </CtaComp>
        <CaseImageComp data-show={show} src="./case.png" alt="" />
      </IntroComp>
    </HomeComp>
  );
};
