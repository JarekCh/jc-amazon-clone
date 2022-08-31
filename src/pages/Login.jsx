import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

// TODO: add hover

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventdefault();
  };

  const register = (e) => {
    e.preventdefault();
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          className='login__logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='button'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
