import React, { useState, useEffect } from "react";
import './AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../Components/Navbar/Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [caterers, setCaterers] = useState([]);
    const [decors, setDecors] = useState([]);
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        // Fetch caterer data
        axios.get('http://localhost:8081/getcaterer')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setCaterers(res.data.Result);
                } else {
                    alert('Error fetching caterer data');
                }
            })
            .catch(err => console.error('Error fetching caterer data:', err));

        // Fetch decor data
        axios.get('http://localhost:8081/getdecor')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setDecors(res.data.Result);
                } else {
                    alert('Error fetching decor data');
                }
            })
            .catch(err => console.error('Error fetching decor data:', err));

        // Fetch venue data
        axios.get('http://localhost:8081/getvenue')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setVenues(res.data.Result);
                } else {
                    alert('Error fetching venue data');
                }
            })
            .catch(err => console.error('Error fetching venue data:', err));
    }, []);

    const handleSeeVenue = () => {
        navigate('/managevenues');
    }

    
    const handleSeeCaterer = () => {
        navigate('/managecaterers');
    }

    
    const handleSeeDecorer = () => {
        navigate('/managedecors');
    }
    return (
        <>
            <Navbar />
            <div className="dashboard-outer-container">
                {caterers.length > 0 && (
                    <div className="Dashboard-content">
                        <div className="category">
                            <div className="category-name">Caterer</div>
                        </div>
                        <div className="grid-container">
                            {caterers.map(caterer => (
                                <div className="grid-item" key={caterer.id}>
                                    <div className="grid-item-details">
                                        <div>
                                            <img className="grid-item-details-img" src={caterer.img1} alt="" />
                                        </div>
                                        <div className="grid-item-details-text">
                                            <div>{caterer.name}</div>
                                            <div className="grid-item-details-text-area">{caterer.price}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="grid-item small">
                                <button className="more-button" onClick={handleSeeCaterer}>
                                    <FontAwesomeIcon className="more-button-icon" icon={faChevronCircleDown} />See More
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {decors.length > 0 && (
                    <div className="Dashboard-content">
                        <div className="category">
                            <div className="category-name">Decor</div>
                        </div>
                        <div className="grid-container">
                            {decors.map(decor => (
                                <div className="grid-item" key={decor.id}>
                                    <div className="grid-item-details">
                                        <div>
                                            <img className="grid-item-details-img" src={decor.img1} alt="" />
                                        </div>
                                        <div className="grid-item-details-text">
                                            <div>{decor.name}</div>
                                            <div className="grid-item-details-text-area">{decor.price}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="grid-item small">
                                <button className="more-button" onClick={handleSeeDecorer}>
                                    <FontAwesomeIcon className="more-button-icon" icon={faChevronCircleDown} />See More
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {venues.length > 0 && (
                    <div className="Dashboard-content">
                        <div className="category">
                            <div className="category-name">Venue</div>
                        </div>
                        <div className="grid-container">
                            {venues.map(venue => (
                                <div className="grid-item" key={venue.id}>
                                    <div className="grid-item-details">
                                        <div>
                                            <img className="grid-item-details-img" src={venue.img1} alt="" />
                                        </div>
                                        <div className="grid-item-details-text">
                                            <div>{venue.name}</div>
                                            <div className="grid-item-details-text-area">{venue.price}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="grid-item small">
                                <button className="more-button" onClick={handleSeeVenue}>
                                    <FontAwesomeIcon className="more-button-icon" icon={faChevronCircleDown} />See More
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
