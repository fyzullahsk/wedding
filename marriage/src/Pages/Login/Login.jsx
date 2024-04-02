import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import LandingNav from '../LandingPage/LandingNav';

export default function Login() {
    const navigate = useNavigate();
    const [errors, setError] = useState({});
    const [values, setValues] = useState({
        email: '',
        Password: ''
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleOnClick = (event) => {
        event.preventDefault();
        if (Object.values(values).some(value => value === '')) {
            alert('Please enter Credentials');
            return;
        }
        
        axios
            .post('http://localhost:8081/login', values)
            .then((res) => {
                console.log(res.data);
                if(res.data.Status == 'Error'){
                    alert(res.data.message);
                    navigate('/register');
                }
                else if(res.data.password == values.Password){
                    if (res.data.Status === 'admin') {
                            localStorage.setItem('authenticatedUser', false);
                            localStorage.setItem('authenticatedAdmin', true);
                            navigate('/AdminDashboard');
                        } else if (res.data.Status === 'customer') {
                            localStorage.setItem('id', res.data.id); // Assuming id is returned from the server
                            localStorage.setItem('authenticatedUser', true);
                            localStorage.setItem('authenticatedAdmin', false);
                            navigate('/dashboard');
                        } 
                }
                else{
                    alert('Invalid Credentials.')
                }
                // if (res.data.Status === 'admin') {
                //     localStorage.setItem('authenticatedUser', false);
                //     localStorage.setItem('authenticatedAdmin', true);
                //     navigate('/AdminDashboard');
                // } else if (res.data.Status === 'customer') {
                //     localStorage.setItem('id', res.data.id); // Assuming id is returned from the server
                //     localStorage.setItem('authenticatedUser', true);
                //     localStorage.setItem('authenticatedAdmin', false);
                //     navigate('/dashboard');
                // } else {
                //     navigate('/register');
                //     alert('Invalid Credentials. Please Register.');
                // }
            })
            .catch((err) => console.log(err));
    };
    

    return (
        <>
            <LandingNav />
            <div className="login-main d-flex justify-content-center">
                <div className="header"><br></br>
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
                        <input type="text" name='email' value={values.email} onChange={handleChange} autoComplete="off" required />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="d-flex flex-column g-1 px-2 mb-3 login-inputs">
                        <div>Password</div>
                        <input type="password" name='Password' value={values.Password} onChange={handleChange} autoComplete="off" required />
                        {errors.Password && <div className="error-message">{errors.Password}</div>}
                    </div>
                    {errors.errorMessage && <div className="error-message">{errors.errorMessage}</div>}
                    <button onClick={handleOnClick} id="login">Login</button>
                    <div>
                        Not a member? <Link to={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
