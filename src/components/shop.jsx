import Items from './items';
import Modal from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Shop() {
  const toggleHome = () => {
    document.querySelector('#shop').classList.add('hidden');
    document.querySelector('#home').classList.remove('z');
    setTimeout(() => {
      document.querySelector('#home').classList.remove('overlap');
    }, 800);
  };

  return (
    <>
      <div id='shop' className='hidden'>
        <nav>
          <div className='navbar'>
            <FontAwesomeIcon onClick={toggleHome} icon={faHouse} />
            <Modal />
          </div>
        </nav>
        <div className='content'>
          <Items />
        </div>
      </div>
    </>
  );
}

export default Shop;
