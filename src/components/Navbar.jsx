import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const cart = useContext(CartContext);
    const navigate = useNavigate() ;


  return (
    <div className='container'>
    <div className='nav'>
        <h3>Ecommerce Store</h3>
        <button className='btn' onClick={() => navigate("/cart") }>Cart <span>({cart.items.length})</span> Item</button>
    </div>
    </div>
  )
}

export default Navbar