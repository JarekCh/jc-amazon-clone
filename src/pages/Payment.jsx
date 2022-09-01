import React from 'react';
import '../styles/payment.css';
import { useGlobalContext } from '../StateProvider';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [{ cart, user }, dispatch] = useGlobalContext();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
        </h1>
        {/* Payment section - delivery adress */}
        <section className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Adress</h3>
          </div>
          <div className='payment__adress'>
            <p>{user?.email}</p>
            <p>Krucza xx/xx</p>
            <p>Warsaw, PL</p>
          </div>
        </section>

        {/* Payment section - review items */}
        <section className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </section>

        {/* Payment section - payment adress */}
        <section className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>{/* stripe */}</div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
