import React from 'react';
import Product from '../components/Product';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__img'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
        <div className='home__row'>
          <Product
            id='12354367'
            title={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis molestiae cupiditate ad unde ab facere ipsa illum tempore!'
            }
            price={29.99}
            image={
              'https://m.media-amazon.com/images/I/51CTIr1bJxL._AC_SY1000_.jpg'
            }
            rating={5}
          />

          <Product
            id='12354307'
            title={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis molestiae cupiditate ad unde ab facere ipsa illum tempore!'
            }
            price={29.99}
            image={
              'https://m.media-amazon.com/images/I/51CTIr1bJxL._AC_SY1000_.jpg'
            }
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id='12354307'
            title={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis molestiae cupiditate ad unde ab facere ipsa illum tempore!'
            }
            price={29.99}
            image={
              'https://m.media-amazon.com/images/I/51CTIr1bJxL._AC_SY1000_.jpg'
            }
            rating={3}
          />
          <Product
            id='12354307'
            title={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis molestiae cupiditate ad unde ab facere ipsa illum tempore!'
            }
            price={29.99}
            image={
              'https://m.media-amazon.com/images/I/51CTIr1bJxL._AC_SY1000_.jpg'
            }
            rating={3}
          />
          <Product
            id='12354307'
            title={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis molestiae cupiditate ad unde ab facere ipsa illum tempore!'
            }
            price={29.99}
            image={
              'https://m.media-amazon.com/images/I/51CTIr1bJxL._AC_SY1000_.jpg'
            }
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id='12354307'
            title={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis molestiae cupiditate ad unde ab facere ipsa illum tempore!'
            }
            price={29.99}
            image={
              'https://m.media-amazon.com/images/I/51CTIr1bJxL._AC_SY1000_.jpg'
            }
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
