import React, { useEffect, useState } from 'react';
import './Caterers.css';
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";

function Caterers() {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    fetchData();
  }, [selectedDate, selectedLocation]);

  const fetchData = () => {
    // Fetch data based on selected date and location if they exist
    if (selectedDate && selectedLocation) {
      // Fetch caterer data
      axios.get(`http://localhost:8081/getcatererdate?date=${selectedDate}&location=${selectedLocation}`)
        .then(res => {
          setData(res.data);
        })
        .catch(err => console.error('Error fetching caterer data:', err));
    } else {
      // Fetch all data if no date and location are selected
      axios.get('http://localhost:8081/getcaterer')
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

  const handleAddToCart = (caterer) => {
    // Extract required data from the caterer object
    const { name, address, price } = caterer;
    
    const userId = localStorage.getItem('id');

    // Create a payload object with the required data including user ID
    const payload = { userId, name, address, price };

    axios.post('http://localhost:8081/addtocart', payload)
      .then(res => {
        if (res.data.message === 'Success') {
          alert('Caterer added to cart successfully!');
        } else {
          alert('Failed to add caterer to cart.');
        }
      })
      .catch(err => console.log(err));
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

  return (
    <>
      <Navbar/>
      <div className='body'>
        <div><br/></div>
        <div></div>
      </div>
      <div className="templateContainer">
        {data.length > 0 ? (
          data.map((val) => {
            return (
              <div className="template" key={val.id} id="adminCatererGrid">
                <div className="Container">
                  <img src={val.img1} alt="" />
                  <img src={val.img2} alt="" />
                  <img src={val.img3} alt="" />
                  <img src={val.img4} alt="" />
                  <p><b>Caterer Name:  </b>   {val.name}</p>
                  <p><b>Address</b>  {val.address} </p>
                  <p><b>Price :</b>  {val.price}</p>
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

export default Caterers;
