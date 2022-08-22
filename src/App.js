import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Products from './pages/Products';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
// import Counter from './component/Counter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Counter/> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/products" />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
