import React from "react";
import "./Navbar.css";
import {  useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

export default function Navbar(){
    const handleLogout = () => {
        localStorage.removeItem('userId'); // Clear studentId from local storage
        navigate('/',{ replace: false }); // Navigate to the login page
        localStorage.removeItem('authenticatedUser');
        localStorage.removeItem('authenticatedAdmin');
        window.location.reload(true);
      };
      const navigate = useNavigate();
    
    return(
        <>
        <nav className="navbar dashboard-nav">
                <div className="navbar-container">
                    <Link to="/dashboard" className="navbar-logo">
                        ForeverTie
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/venue" className="nav-links">
                                Venue
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/decorer" className="nav-links">
                                Decor
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/caterer" className="nav-links">
                                Caterer
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-links">
                            Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                        <div className="nav-logout" onClick={handleLogout}>
                             Logout
                        </div>          
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}