import React, { useState } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
    const [errors, setError] = useState({});
  const [values, setValues] = useState({
    Username: '',
    Password: ''
  });
  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: (event.target.value).trim() }));
  };
  const handleOnClick = async () => {}
  return (
    <>
    <div className="d-flex justify-content-center ">
        <div className="header">
            <div>
                <h1 className='main-heading'>Welcome to your Wedding Portal</h1>
            </div>
            <div>
                <h3 className='sub-heading'>Plan your dream wedding with ease. Everything you need, all in one place</h3>
            </div>
        </div>
        <div className="login-details">

        <div className="d-flex flex-column g-1 px-2 login-inputs">
          <div>Email Id</div>
          <input type="text" name='Username' onChange={handleChange} autoComplete="off" required/>
          {errors.Username && <div className="error-message">{errors.Username}</div>}
        </div>
        <div className="d-flex flex-column g-1 px-2 mb-3 login-inputs">
          <div>Password</div>
          <input type="text" name='Password' onChange={handleChange} autoComplete="off" required/>
          {errors.Password && <div className="error-message">{errors.Password}</div>}
        </div>
        {errors.errorMessage && <div className="error-message">{errors.errorMessage}</div>}
        
        <input type="submit" value="Submit" />
        <div>
          Not a member? <Link to={"/register"}>Register</Link>
        </div>
        </div>
    </div>
    </>
    
  );
}