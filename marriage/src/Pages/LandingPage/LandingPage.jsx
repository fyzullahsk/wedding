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
                    <ImageSwiper />
                </div>
                <div className="text-content">
                    <div className="grid-container">
                        <div className="grid-item">
                            <span className="left-grid-item">WHAT WE BELIEVE</span>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-content">
                                <span >We believe in celebrating love.</span>
                                <span>Venue.Caterer.Decor.Arrangements.Destination Wedding. Plan ahead.Seamless transaction.Hessle-free celebration.</span>
                                <span>We believe that every love story deserves to be celebrated with grace, elegance, and authenticity, regardless of the distance or circumstances. Join us in embracing the future of weddings, where innovation meets tradition, and love knows no bounds.</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}