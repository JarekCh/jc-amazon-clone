import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import SharedLayout from './pages/SharedLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
