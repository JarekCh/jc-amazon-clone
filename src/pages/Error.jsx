import React from 'react';
import '../styles/error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div>Error</div>
      <Link to='/'>to home</Link>
    </>
  );
};

export default Error;