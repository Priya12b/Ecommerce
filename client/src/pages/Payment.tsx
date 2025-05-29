//client/src/pages/Payment.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!paymentMethod) return alert("Select a payment method");

    setProcessing(true);
    setTimeout(() => {
      setSuccess(true);
      clearCart();
      setTimeout(() => navigate('/'), 3000);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mock Payment Gateway</h2>

      {!success ? (
        <>
          <label className="block mb-2">Choose Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">-- Select --</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
          </select>

          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {processing ? 'Processing...' : 'Pay Now'}
          </button>
        </>
      ) : (
        <div className="bg-white p-6 mt-6 text-center rounded shadow animate-bounce">
          <h3 className="text-xl font-bold text-green-600">Payment Successful!</h3>
          <p className="mt-2">Redirecting to home...</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
