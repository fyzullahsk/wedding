import React, { useEffect, useState } from 'react';
import './Decorers.css';
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";

function Decorers() {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    fetchData();
  }, [selectedDate, selectedLocation]);

  const fetchData = () => {
    // Fetch data based on selected date and location if they exist
    if (selectedDate && selectedLocation) {
      axios.get(`http://localhost:8081/getdecordate?date=${selectedDate}&location=${selectedLocation}`)
        .then(res => {
          setData(res.data);
        })
        .catch(err => console.error('Error fetching decor data:', err));
    } else {
      // Fetch all data if no date and location are selected
      axios.get('http://localhost:8081/getdecor')
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

  const handleAddToCart = (decorer) => {
    // Extract required data from the decorer object
    const { name, address, price } = decorer;

    const userId = localStorage.getItem('id');

    // Create a payload object with the required data including user ID
    const payload = { userId, name, address, price };

    axios.post('http://localhost:8081/addtocart', payload)
      .then(res => {
        if (res.data.message === 'Success') {
          alert('Decorer added to cart successfully!');
        } else {
          alert('Failed to add decorer to cart.');
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
      <div>
        <p> Date Filter :- </p>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <p> Location Filter :- </p>
        <input type="text" value={selectedLocation} onChange={handleLocationChange} />
        <button onClick={handleFilter}>Apply Filters</button>
      </div>
      <div className="templateContainer">
        {data.length > 0 ? (
          data.map((val) => {
            return (
              <div className="template" key={val.id} id="adminDecorerGrid">
                <div className="Container">
                  <img src={val.img1} alt="" />
                  <img src={val.img2} alt="" />
                  <img src={val.img3} alt="" />
                  <img src={val.img4} alt="" />
                  <p><b>Decorer Name:  </b>   {val.name}</p>
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
    </>
  );
}

export default Decorers;
