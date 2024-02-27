import React, { useEffect, useState } from 'react';
import './Decors.css';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
<<<<<<< HEAD
export default function Decors(){
    return(
        <>
        <AdminNavbar/>
        <div className="manage-venue-outer-container">
            <div className="manage-venue-outer-container-title">
                Manage Decorers
            </div>
            <div className="manage-venue-outer-container-subtitle">
                Selct an option to Manage Decorers
            </div>
            <div className="button-group">
                <input type="button" value="Add New Decorers" />
                <input type="button" value="Update Decorers" />
                <input type="button" value="Delete Decorers" />
            </div>
        </div>
        </>
    );
}
=======

function Decors() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8081/getdecor')
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

  const handleDelete = id => {
    axios
      .delete(`http://localhost:8081/deletedecor/${id}`)
      .then(res => {
        if (res.data.Status === 'Success') {
          window.location.reload(true);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
    <AdminNavbar/>
      <div className='body'>
        <div><br/></div>
        <div></div>
      </div>
      <div className="templateContainer">
        {data.length > 0 ? (
          data.map((val) => {
            return (
              <div className="template" key={val.id} id="adminDecorGrid">
                <div className="Container">
                  <p>decor name  : {val.name}</p>
                  <p>decor theme : {val.theme}</p>
                  <img src={val.img1} alt="" />
                  <img src={val.img2} alt="" />
                  <img src={val.img3} alt="" />
                  <img src={val.img4} alt="" />
                  <p>decor address : {val.address} </p>
                  <p>decor price : {val.price}</p>
                </div>
                <div className="buttonContainer">
                  <Link to={`/admin/editdecor/${val.id}`} id="adminEditDecor" className="editButton" type="button">
                    <FaEdit />
                  </Link>
                  <Link onClick={e => handleDelete(val.id)} id="adminDelete" className="deleteButton" type="button">
                    <FaTrash />
                  </Link>
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

export default Decors;
>>>>>>> 4516883f67d2f3b8f6d1ba43fde9fd04e29e4a85
