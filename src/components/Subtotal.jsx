import React from 'react';
import '../styles/subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useGlobalContext } from '../StateProvider';

const Subtotal = () => {
  const [{ cart }, dispatch] = useGlobalContext();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* home work */}
              Subtotal ({cart.length} items): <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // home work
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
