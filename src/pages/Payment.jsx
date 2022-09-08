import React, { useState, useEffect } from 'react';
import '../styles/payment.css';
import { useGlobalContext } from '../StateProvider';
import CartItem from '../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../reducer';
import axios from '../api/axios';
import { db } from '../firebase';

const Payment = () => {
  const [{ cart, user }, dispatch] = useGlobalContext();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });

        navigate('/orders', { replace: true });
      });
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
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing..</p> : 'Buy Now'} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
