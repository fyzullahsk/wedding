import React, { useEffect, useState } from 'react';
import './Bookings.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Navbar from "../../Components/Navbar/Navbar";

function Bookings() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch bookings data
    axios.get('http://localhost:8081/getbookings')
      .then(res => {
        if (res.data.Status === 'Success') {
          setData(res.data.Result);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));

    // Fetch total price
    axios.get('http://localhost:8081/gettotalprice')
      .then(res => {
        if (res.data.Status === 'Success') {
          setTotalPrice(res.data.TotalPrice);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  }, []);

  // Function to simulate payment
  const handlePayment = () => {
    navigate('/payment');
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
      </div> {/* Display total price and payment button */}
    </>
  );
}

export default Bookings;
