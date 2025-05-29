//client/src/pages/Cart.tsx


import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Clear Cart
            </button>
          </div>
          <Link to="/checkout">
  <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
    Go to Checkout
  </button>
</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
