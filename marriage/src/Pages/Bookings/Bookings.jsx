import React, { useEffect, useState } from 'react';
import './Bookings.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Navbar from "../../Components/Navbar/Navbar";

function Bookings() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const userId = localStorage.getItem('id'); // Assuming the user's ID is stored in localStorage

  useEffect(() => {
    // Fetch bookings data for the current user
    axios.get(`http://localhost:8081/getbookings/${userId}`)
      .then(res => {
        if (res.data.Status === 'Success') {
          setData(res.data.Result);
        } else {
          alert('Cart Is empty');
        }
      })
      .catch(err => console.log(err));

    // Fetch total price for the current user
    axios.get(`http://localhost:8081/gettotalprice/${userId}`)
      .then(res => {
        if (res.data.Status === 'Success') {
          setTotalPrice(res.data.TotalPrice);
        } 
      })
      .catch(err => console.log(err));
  }, [userId]); // Fetch data again when userId changes

  // Function to remove an item from the cart
  const handleRemove = (itemId) => {
    axios.delete(`http://localhost:8081/removeitem/${userId}/${itemId}`)
      .then(res => {
        if (res.data.Status === 'Success') {
          // Refresh data after successful removal
          fetchData();
        } else {
          window.location.reload(true);
          alert('item has been successfully');
        }
      })
      .catch(err => console.log(err));
  };

  // Function to fetch data again after removing an item
  const fetchData = () => {
    axios.get(`http://localhost:8081/getbookings/${userId}`)
      .then(res => {
        if (res.data.status === 'Success') {
          setData(res.data.Result);
        } else {
          alert('Error fetching data');
        }
      })
      .catch(err => console.log(err));
  };

  // Function to navigate to the payment page
  const handlePayment = () => {
    navigate('/payment');
  };

  // Function to navigate to the payment history page
  const handlePaymentHistory = () => {
    navigate('/paymenthistory');
  };

  return (
    <>
      <Navbar/>
      <div className='body'>
        <div><br/></div>
      </div>
      <div className="templateContainer">
        {data.length > 0 ? (
          data.map((val) => {
            return (
              <div className="template" key={val.id} id="adminVenueGrid">
                <div className="Container">
                  <p><b>Name:</b> {val.name}</p>
                  <p><b>Address:</b> {val.address}</p>
                  <p><b>Price:</b> {val.price}</p>
                  <button onClick={() => handleRemove(val.id)}>Remove</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <div>
        <p><b>Total Price:</b> {totalPrice}</p>
        <button onClick={handlePayment}>Make Payment</button>
        <button onClick={handlePaymentHistory}>Payment History</button>
      </div> 
    </>
  );
}

export default Bookings;
