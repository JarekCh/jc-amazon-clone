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
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {data.basket?.map((item) => {
        const { id, title, image, price, rating } = item;
        <CartItem
          id={id}
          title={title}
          image={image}
          price={price}
          rating={rating}
        />;
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
