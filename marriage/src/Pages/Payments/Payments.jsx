import React, { useState } from 'react';
import './Payments.css'; // Import CSS for styling
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function PaymentPage() {
    const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    // Simulate payment success
    alert('Payment Successful!');
    navigate('/feedback');
  };

  return (
    <>
    <Navbar/>
    <div className="payment-container">
      <h2>Payment Page</h2>
      <div className="payment-form">
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        <br></br>
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        <div className="payment-methods">
          <button onClick={() => setPaymentMethod('Credit Card')}>Credit Card</button>
          <button onClick={() => setPaymentMethod('Debit Card')}>Debit Card</button>
        </div>
        <button className="payment-button" onClick={handlePayment}>Make Payment</button>
      </div>
    </div>
    </>
  );
}

export default PaymentPage;
