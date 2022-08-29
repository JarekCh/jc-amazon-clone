import React from 'react';
import '../styles/product.css';

const Product = () => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The lean startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product__rating'>
          <p>&#127775;</p>
        </div>
      </div>
      <img
        src='https://m.media-amazon.com/images/I/51CTIr1bJxL._AC_SY1000_.jpg'
        alt=''
      />

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
