import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";

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

  return (
    <>
      <Navbar />
      <div className="templateContainer">
        {paymentHistory.length > 0 ? (
          paymentHistory.map((val) => {
            return (
              <div className="template" key={val.id} id="adminVenueGrid">
                <div className="Container">
                  <p><b>Price:</b> {val.totalAmount}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
}

export default PaymentHistory;
