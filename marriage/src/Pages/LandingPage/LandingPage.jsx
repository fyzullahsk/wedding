import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import ImageSwiper from "../../Components/ImageSwiper/ImageSwiper";
export default function LandingPage() {
    return (
        <>
 <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        ForeverTie
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="landing-content">
                <span className="title">
                    <span className='Welcome-greet'>Welcome to </span>
                    <span className='greet-message'>Your Premier E-Wedding Destination</span>
                </span>
                <div className="image-carousel">
                    <ImageSwiper/>
                </div>
            </div>
        </>
    );
}