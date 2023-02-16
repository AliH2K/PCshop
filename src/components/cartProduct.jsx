import { CartContext } from './cartContext';
import { useContext } from 'react';
import { GetProductData } from '../resources/products';

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = GetProductData(id);

  return (
    <>
      <div className='cartProduct'>
        <img className='cartImage cartItem' src={'./' + id + '.png'} />
        <h3 className='cartItem'>{productData.name}</h3>
        <div className='cartChange cartItem'>
          <button className='cartActive' onClick={() => cart.addOneToCart(id)}>
            +
          </button>
          <p>{quantity} in cart</p>
          <button
            className='cartActive'
            onClick={() => cart.removeOneFromCart(id)}
          >
            -
          </button>
        </div>
        <p className='cartItem'>
          {(quantity * productData.price).toFixed(2)} $
        </p>
        <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
      </div>
    </>
  );
}

export default CartProduct;
