import React, { useState } from 'react';
import '../styles/payment.css';
import { useGlobalContext } from '../StateProvider';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../reducer';

const Payment = () => {
  const [{ cart, user }, dispatch] = useGlobalContext();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    // form stripe
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

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
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
