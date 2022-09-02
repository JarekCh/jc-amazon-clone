import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import SharedLayout from './pages/SharedLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useGlobalContext } from './StateProvider';
import Payment from './pages/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51LdNIFBb4EuDLhAXoAvp9zeaPUOcnq9lPEPkzKMVFld1J93rfxBDilPqnmogOmxjfPtPzedOflN6P8OW2ZMHE3He00egd6wycm'
);

function App() {
  const [{}, dispatch] = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(
        '🚀 ~ file: App.js ~ line 17 ~ auth.onAuthStateChanged ~ authUser',
        authUser
      );
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  // TODO add deliver bar check real page under header
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />

            <Route
              path='/payment'
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />

            {/* TODO add footer */}
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
