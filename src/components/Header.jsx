import React from 'react';
import '../styles/header.css';
import { FaSearch } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <div className='header__searchIcon'>
          <FaSearch />
        </div>
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Return</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </div>
      <div className='header__optionBasket'>
        <span className='header__optionLineOne header__basketCount'>0</span>
        <BsCart2 />
      </div>
    </div>
  );
};

export default Header;
