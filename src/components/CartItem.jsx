import React from 'react';
import '../styles/cartItem.css';

const CartItem = ({ id, image, title, price, rating }) => {
  return (
    <div className='cartItem'>
      <img className='cartItem__image' src={image} alt='product' />

      <div className='cartItem__info'>
        <p className='cartItem__title'>{title}</p>
        <p className='cartItem__price'>
          <small>$</small>
          <strong>{price}</strong>
          <p className='cartItem__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </p>
        </p>
        <button>Remove from cart</button>
      </div>
    </div>
  );
};

export default CartItem;
