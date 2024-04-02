import React, { useEffect, useState } from 'react';
import './Venues.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";

function Venues() {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [selectedDate, selectedLocation]);

  const fetchData = () => {
    // Fetch data based on selected date and location if they exist
    if (selectedDate && selectedLocation) {
        // Fetch venue data
        axios.get(`http://localhost:8081/getvenuedate?date=${selectedDate}&location=${selectedLocation}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.error('Error fetching venue data:', err));
    } else {
        // Fetch all venue data if no date and location are selected
        axios.get('http://localhost:8081/getvenue')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setData(res.data.Result);
                } else {
                    alert('Error');
                }
            })
            .catch(err => console.log(err));
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleFilter = () => {
    fetchData();
  };

  const handleAddToCart = (venue) => {
    // Extract required data from the venue object
    const { name, address, price } = venue;
    const userId = localStorage.getItem('id');

    // Create a payload object with the required data including user ID
    const payload = { userId, name, address, price };

    axios.post('http://localhost:8081/addtocart', payload)
      .then(res => {
        if (res.data.message === 'Success') {
          alert('Venue added to cart successfully!');
        } else {
          alert('Failed to add venue to cart.');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className='body'>
        <div><br/></div>
        <div></div>
      </div>
      <div className="templateContainer">
        {data.length > 0 ? (
          data.map((val) => {
            return (
              <div className="template" key={val.id} id="adminVenueGrid">
                <div className="Container">
                  <img src={val.img1} alt="" />
                  <img src={val.img2} alt="" />
                  <img src={val.img3} alt="" />
                  <img src={val.img4} alt="" />
                  <p><b>Venue Name:  </b>   {val.name}</p>
                  <p><b>Capacity  :</b>  upto to {val.capacity} </p>
                  <p><b>Address</b>  {val.address} </p>
                  <p><b>Price per hour : $</b>  {val.price}</p>
                  <button onClick={() => handleAddToCart(val)}  className="addButton">Add to Cart</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <div>
        <p> Date Filter :- </p>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <p> Location Filter :- </p>
        <input type="text" value={selectedLocation} onChange={handleLocationChange} />
        <button onClick={handleFilter}>Apply Filters</button>
      </div>
    </>
  );
}

export default Venues;
