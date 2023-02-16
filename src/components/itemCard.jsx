import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './cartContext';
import { useContext } from 'react';

function ItemCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
      <div className='picContainer'>
        <img className='pic' src={'./' + product.id + '.png'} alt='.' />
      </div>
      <div className='info'>
        <span className='name'>{product.name}</span>
        <br />
        <span>{product.price} $</span>
      </div>
      <div className='add'>
        {productQuantity > 0 ? (
          <>
            <button
              className='cartActive'
              onClick={() => cart.addOneToCart(product.id)}
            >
              +
            </button>
            <span className='cartActive'>{productQuantity}</span>
            <button
              className='cartActive'
              onClick={() => cart.removeOneFromCart(product.id)}
            >
              -
            </button>
          </>
        ) : (
          <button
            className='addCart'
            onClick={() => cart.addOneToCart(product.id)}
          >
            <FontAwesomeIcon icon={faCartPlus} size='lg' />
          </button>
        )}
      </div>
      <div className='specs'>
        <h1>SPECS</h1>
        <div className='specsInfo'>
          <h3 className='specsName'>GPU:</h3>
          <h4>{product.gpu}</h4>
        </div>
        <div className='specsInfo'>
          <h3 className='specsName'>CPU:</h3>
          <h4>{product.cpu}</h4>
        </div>
        <div className='specsInfo'>
          <h3 className='specsName'>RAM:</h3>
          <h4>{product.ram} GBs</h4>
        </div>
        <div className='specsInfo'>
          <h3 className='specsName'>HDD:</h3>
          <h4>{product.hdd} GBs</h4>
        </div>
        <div className='specsInfo'>
          <h3 className='specsName'>SSD:</h3>
          <h4>{product.ssd} GBs</h4>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
