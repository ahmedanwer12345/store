import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  if (cart.items.length === 0) {
    return (
      <div className='cart-empty'>
        <h3 >Your Cart is Empty</h3>
        <button onClick={() => navigate("/store")} className="btn">Go To Page</button>
      </div>
    );
  }
  return (
    <div className='container'>
      <div className='cart'>
        <div className='cart-item'>
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total Price</h5>
        </div>

        {cart.items.map(p => (
          <div key={p.id} className='cart-item'>
            <div className="img">
              <img alt={p.title} src={p.img} />
            </div>
            <p className='cont'>{p.price.toFixed(2)}$</p>
            <div className="quantity">
              <button onClick={() => cart.addOneToCart(p.id)}>+</button>
              <p>{p.quantity}</p>
              <button onClick={() => cart.removeOneFromCart(p.id)}>-</button>
            </div>
            <h5 className='cont'>{(p.price * p.quantity).toFixed(2)}$</h5>
          </div>
        ))}
        <div className='cart-item foot'>
          <h5>Total Coast</h5>
          <p>{cart.getTotalPrice().toFixed(2)}</p>
          <p>{cart.getTotalQuantity()}</p>
          <h5 className='cont'>{cart.getTotalCoast().toFixed(2)}$</h5>
        </div>
        <button className='btn cart-btn' onClick={() => { cart.deleteAllCart(); navigate("/cart/checkout") }}>
          Checkout
        </button>


      </div>

    </div>
  )
}

export default Cart