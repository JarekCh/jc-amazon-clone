import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
