import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Basket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
