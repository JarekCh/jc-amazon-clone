import React from 'react';
import '../styles/order.css';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import CartItem from '../components/CartItem';

function Order({ order }) {
  const { data } = order;
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {data.cart?.map((item) => {
        const { id, title, image, price, rating } = item;
        return (
          <CartItem
            id={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
            hideButton
          />
        );
      })}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order__total'>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
