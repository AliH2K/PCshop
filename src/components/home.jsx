import React, { useEffect } from 'react';

function Home() {
  const toggleShop = () => {
    document.querySelector('#shop').classList.remove('hidden');
    document.querySelector('#home').classList.add('overlap');
    setTimeout(() => {
      document.querySelector('#home').classList.add('z');
    }, 780);
  };

  useEffect(() => {
    document.querySelector('.cta').classList.remove('loadLeft');
    document.querySelector('.case').classList.remove('loadRight');
  });

  return (
    <>
      <div id='home'>
        <h1 id='brand'>Overclocked</h1>
        <section className='intro'>
          <div className='cta loadLeft'>
            <h1>Need help buildng your dream pc?</h1>
            <h3>Leave it to us.</h3>
            <button className='btn' onClick={toggleShop}>
              Shop
            </button>
          </div>
          <img className='case loadRight' src='./case.png' alt='' />
        </section>
      </div>
    </>
  );
}

export default Home;
