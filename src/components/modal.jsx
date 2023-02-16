import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { CartContext } from './cartContext';
import CartProduct from './cartProduct';

function Modal() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const [modal, toggleModal] = useState(false);
  const toggleM = () => {
    toggleModal(!modal);

    if (!modal) {
      setTimeout(() => {
        document.querySelector('.modal').classList.remove('modalUp');
      }, 100);
    }
  };

  return (
    <>
      <div className='cartContainer'>
        <FontAwesomeIcon onClick={toggleM} icon={faCartShopping} />
        {productsCount > 0 && (
          <span className='count' onClick={toggleM}>
            {productsCount}
          </span>
        )}
      </div>
      {modal && (
        <>
          <div className='overlay' onClick={toggleM}></div>
          <div className='modal modalUp'>
            <button onClick={toggleM} className='closeModal'>
              X
            </button>
            {productsCount > 0 ? (
              <>
                <h1>Total: {cart.getTotalCost().toFixed(2)} $</h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  Items in your cart:{' '}
                </p>
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct
                    key={idx}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                  />
                ))}
                <button className='checkout'>Check Out</button>
              </>
            ) : (
              <>
                <h1 className='noItems'>
                  There are no items in your cart!
                  <br />
                  <FontAwesomeIcon icon={faFaceFrown} size='5x' />
                </h1>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
