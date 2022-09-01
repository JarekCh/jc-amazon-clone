import React from 'react';
import '../styles/subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useGlobalContext } from '../StateProvider';
import { getCartTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useGlobalContext();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
