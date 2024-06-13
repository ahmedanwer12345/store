import { useState, createContext } from "react";

export const CartContext = createContext();
//  {
//   items : [] ,
//   addOneToCart : () => {},
//   removeOneFromCart : () => {} ,
//   deleteFromCart : () => {} ,
//   getProductQuantity : () => {},
//   getTotalCoast : () => {},}


function CartProvider({ children }) {
  const [cartProducts, setCartproducts] = useState([]);
  const contextValue = {
    items: cartProducts,
    addOneToCart,
    removeOneFromCart,
    getProductQuantity,
    getTotalCoast,
    deleteFromCart,
    deleteAllCart,
    getTotalQuantity,
    getTotalPrice
  }
  function getProductQuantity(id) {
    const quantity = cartProducts.find(p => p.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    else return quantity;
  }
  function addOneToCart(id, price, img, title) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartproducts([...cartProducts, { id: id, price: price, img: img, title: title, quantity: 1 }]);
    }
    else {
      setCartproducts(cartProducts.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    }
    else {
      setCartproducts(cartProducts.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
    }
  }
  function deleteFromCart(id) {
    setCartproducts(cartProducts.filter(p => p.id !== id));
  }
  function deleteAllCart() {
    setCartproducts([]);
  }
  function getTotalCoast() {
    const total = cartProducts.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    return total;
  }
  function getTotalPrice() {
    const total = cartProducts.reduce((acc, curr) => acc + curr.price, 0);
    return total;
  }
  function getTotalQuantity() {
    const total = cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
    return total;
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider;