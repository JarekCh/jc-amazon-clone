import React from 'react';
import { useGlobalContext } from '../StateProvider';
import '../styles/product.css';

const Product = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useGlobalContext();
  console.log('🚀 ~ file: Product.jsx ~ line 7 ~ Product ~ cart', cart);
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToCart}>Add to Basket</button>
    </div>
  );
};

export default Product;
