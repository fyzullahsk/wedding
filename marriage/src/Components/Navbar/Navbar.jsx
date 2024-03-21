import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
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
                            <Link to="/" className="nav-links">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}