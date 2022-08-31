import React from 'react';
import '../styles/header.css';
import { FaSearch } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../StateProvider';

const Header = () => {
  const [{ cart }, dispatch] = useGlobalContext();
  console.log('🚀 ~ file: Header.jsx ~ line 10 ~ Header ~ state', cart);
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <div className='header__searchIcon'>
          <FaSearch />
        </div>
      </div>
      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello, Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>Return</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </div>
      <Link to='/checkout'>
        <div className='header__optionCart'>
          <span className='header__optionLineOne header__cartCount'>
            {cart?.length}
          </span>
          <BsCart2 />
        </div>
      </Link>
    </div>
  );
};

export default Header;
