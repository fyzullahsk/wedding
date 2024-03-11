import React, { useEffect, useState } from 'react';
import './Bookings.css';
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";

function Bookings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/getbookings')
      .then(res => {
        if (res.data.Status === 'Success') {
          console.log(res.data.Result);
          setData(res.data.Result);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  }, []);

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
              <div className="template" key={val.id} id="adminVenueGrid">
                <div className="Container">
                  <p><b>Name:  </b>   {val.name}</p>
                  <p><b>Address</b>  {val.address} </p>
                  <p><b>Price :</b>  {val.price}</p>
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

export default Bookings;
