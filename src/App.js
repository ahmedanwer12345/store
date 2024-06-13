import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartProvider from './context/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <CartProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/store" element={<><Navbar /> <Products /> </>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
