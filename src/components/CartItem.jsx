import React from 'react';
import { useGlobalContext } from '../StateProvider';
import '../styles/cartItem.css';

// TODO: add hover on buttons

const CartItem = ({ id, image, title, price, rating, hideButton }) => {
  const [{ cart }, dispatch] = useGlobalContext();
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

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
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from cart</button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
