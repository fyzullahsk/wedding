import React, { useEffect, useState } from 'react';
import './Payments.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Navbar from "../../Components/Navbar/Navbar";

function PaymentPage() {
    const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const userId = localStorage.getItem('id'); 
      useEffect(() => {
      // Fetch total price for the current user
      axios.get(`http://localhost:8081/gettotalprice/${userId}`)
      .then(res => {
        if (res.data.Status === 'Success') {
          setTotalPrice(res.data.TotalPrice);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  }, [userId]); // Fetch data again when userId changes

  const handlePayment = () => {
    // Make a POST request to store total amount in the payments table
    axios.post('http://localhost:8081/makepayment', { userId, totalAmount: totalPrice })
        .then(res => {
            if (res.data.status === 'Success') {
                // Payment successful, navigate to feedback page or perform any other action
                alert('Payment Successful!');
                navigate('/feedback');
            } else {
                // Handle error
                alert('Payment failed. Please try again.');
            }
        })
        .catch(err => {
            console.error('Error making payment:', err);
            alert('Payment failed. Please try again.');
        });
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
    <div>
        <p><b>Total Price:</b> {totalPrice}</p>

      </div> 
    </>
  );
}

export default PaymentPage;
