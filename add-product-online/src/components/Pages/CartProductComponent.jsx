import React, { useState, useEffect } from 'react';
import './CartProductComponent.css';

const CartProductComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch cart items from an API or storage (simulated data)
    const cartItemsData = [
      { id: 1, name: 'Smartwatch 1', price: 199.99, quantity: 2 },
      { id: 2, name: 'Smartwatch 2', price: 149.99, quantity: 1 },
    ];

    setCartItems(cartItemsData);
  }, []);

  useEffect(() => {
    // Calculate the total price when cart items change
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    // Remove an item from the cart
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Price: ${totalPrice}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartProductComponent;
