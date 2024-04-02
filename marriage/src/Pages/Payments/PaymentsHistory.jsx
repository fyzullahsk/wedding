import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";
import "./Payments.css"
function PaymentHistory() {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const userId = localStorage.getItem('id'); // Assuming the user's ID is stored in localStorage

  useEffect(() => {
    // Fetch payment history for the current user
    axios.get(`http://localhost:8081/paymenthistory/${userId}`)
      .then(res => {
        if (res.data.Status === 'Success') {
          setPaymentHistory(res.data.Result);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  }, [userId]); // Fetch data again when userId changes

  // Function to format date string to a user-friendly format
  // Function to format date string to display only the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString(undefined, options); // Only the date part will be returned
};


  return (
    <>
      <Navbar />
      <div className="payment-history-container">
        {paymentHistory.length > 0 ? (
          paymentHistory.map((val) => {
            return (
              <div className="payment" key={val.id} id="adminVenueGrid">
                <div className="Container">
                  <p><b>Payment Date:</b> {formatDate(val.paymentDate)}</p>
                  <p><b>Payment Mode:</b> {val.paymentMode}</p>
                  <p><b>Price:</b> {val.totalAmount}</p>
                  {val.paymentStatus =='Success' && <p ><b>Payment Status:</b>  <span className='payment-success'>{val.paymentStatus}</span></p>}
                  {val.paymentStatus =='Failed' && <p ><b>Payment Status:</b> <span className='payment-failed'>{val.paymentStatus}</span></p>}
                </div>
              </div>
            );
          })
        ) : (
          <p >No Payments found.</p>
        )}
      </div>
    </>
  );
}

export default PaymentHistory;
