import React from 'react';
import CartItem from '../components/CartItem';
import Subtotal from '../components/Subtotal';
import { useGlobalContext } from '../StateProvider';
import '../styles/checkout.css';

// TODO refactor context for adding quantity
// TODO add hr or css linie between products

const Checkout = () => {
  const [{ cart }, dispatch] = useGlobalContext();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg'
          alt=''
        />
        <div>
          <h2 className='checkout__title'>Your shopping cart</h2>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
