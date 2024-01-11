import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext } from 'react';
import { ShopContext } from './shopContext';
import { CartProduct } from './cartProduct';
import { CheckoutBtnComp, CloseModalComp, CountComp, ModalComp, NoItemsComp, OverlayComp } from '../styles/modalStyles';

export const Modal = () => {
  const cart = useContext(ShopContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const [modal, toggleModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  function toggleM() {
    toggleModal(!modal);
    setTimeout(() => {
      setAnimateModal(!animateModal);
    }, 0);
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <FontAwesomeIcon style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={toggleM} icon={faCartShopping} />
        {productsCount > 0 && <CountComp onClick={toggleM}>{productsCount}</CountComp>}
      </div>
      {modal && (
        <>
          <OverlayComp onClick={toggleM} />
          <ModalComp data-show={animateModal}>
            <CloseModalComp onClick={toggleM}>X</CloseModalComp>
            {productsCount > 0 ? (
              <>
                <h1>Total: {cart.getTotalCost().toFixed(2)} $</h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Items in your cart: </p>
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
                ))}
                <CheckoutBtnComp>Check Out</CheckoutBtnComp>
              </>
            ) : (
              <>
                <NoItemsComp>
                  There are no items in your cart!
                  <br />
                  <FontAwesomeIcon style={{ marginTop: '30px', color: 'rgb(24, 24, 24)' }} icon={faFaceFrown} size="5x" />
                </NoItemsComp>
              </>
            )}
          </ModalComp>
        </>
      )}
    </>
  );
};
