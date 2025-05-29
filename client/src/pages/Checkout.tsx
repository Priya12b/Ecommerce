// client/src/pages/Checkout.tsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalAfterDiscount = subtotal - discountAmount;

//   const handleCheckout = () => {
//     setShowModal(true);
//     setTimeout(() => {
//       clearCart();
//       navigate('/');
//     }, 3000);
//   };
const handleCheckout = () => {
  navigate('/payment');
};

  const handleApplyDiscount = () => {
    if (discountCode === 'SAVE10') {
      setDiscountPercent(10);
      setError('');
    } else if (discountCode === 'SAVE20' && subtotal >= 100) {
      setDiscountPercent(20);
      setError('');
    } else if (discountCode === 'SAVE30' && subtotal >= 200) {
      setDiscountPercent(30);
      setError('');
    } else if (discountCode === 'SAVE40' && subtotal >= 300) {
      setDiscountPercent(40);
      setError('');
    } else {
      setDiscountPercent(0);
      setError('Invalid or ineligible discount code, please try again.\n Enter valid code for valid total price. ');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2">
                <span className="font-semibold">{item.name}</span> x {item.quantity}
              </li>
            ))}
          </ul>

          {/* Discount Code Section */}
          <div className="mt-4">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
              className="px-3 py-2 border rounded mr-2"
            />
            <button
              onClick={handleApplyDiscount}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Apply
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          {/* Pricing Summary */}
          <div className="mt-4 text-lg">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            {discountPercent > 0 && (
              <>
                <p className="text-green-600">Discount ({discountPercent}%): -${discountAmount.toFixed(2)}</p>
                <p className="font-bold">Total: ${totalAfterDiscount.toFixed(2)}</p>
              </>
            )}
            {discountPercent === 0 && <p className="font-bold">Total: ${subtotal.toFixed(2)}</p>}
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Place Order
          </button>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg animate-bounce">
            <h3 className="text-xl font-bold text-green-600">Success!</h3>
            <p className="mt-2">Your order has been placed.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
