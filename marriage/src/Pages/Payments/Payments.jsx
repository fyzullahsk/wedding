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
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch total price for the current user
        axios.get(`http://localhost:8081/gettotalprice/${userId}`)
        .then(res => {
            if (res.data.Status === 'Success') {
                setTotalPrice(res.data.TotalPrice);
            } else {
                setError('Error fetching total price');
            }
        })
        .catch(err => {
            console.error('Error fetching total price:', err);
            setError('Error fetching total price');
        });
    }, [userId]); // Fetch data again when userId changes

    const handlePayment = () => {
        // Validate input fields
        if (cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '' || paymentMethod === '') {
            setError('Please fill in all fields');
            return;
        }
        
        // Make a POST request to store total amount in the payments table
        axios.post('http://localhost:8081/makepayment', { 
            userId, 
            totalAmount: totalPrice,
            paymentMode: paymentMethod, 
            paymentDate: new Date().toISOString().split('T')[0],
            paymentStatus: 'Success'
        })
        .then(res => {
            if (res.data.status === 'Success') {
                // Payment successful, navigate to feedback page or perform any other action
                alert('Payment Successful!');
                navigate('/feedback');
            } else {
                // Handle error
                setError('Payment failed. Please try again.');
            }
        })
        .catch(err => {
            console.error('Error making payment:', err);
            setError('Payment failed. Please try again.');
        });
    };

    return (
        <>
            <Navbar />
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
                        <button className={paymentMethod === 'Credit Card' ? 'selected' : ''} onClick={() => setPaymentMethod('Credit Card')}>Credit Card</button>
                        <button className={paymentMethod === 'Debit Card' ? 'selected' : ''} onClick={() => setPaymentMethod('Debit Card')}>Debit Card</button>
                    </div>
                    <button className="payment-button" onClick={handlePayment}>Make Payment</button>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
            <div>
                <p><b>Total Price:</b> {totalPrice}</p>
            </div> 
        </>
    );
}

export default PaymentPage;
