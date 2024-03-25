import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../Components/Navbar/Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [caterers, setCaterers] = useState([]);
    const [decors, setDecors] = useState([]);
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        fetchData();
    }, [selectedDate, selectedLocation]);

    const fetchData = () => {
        // Fetch data based on selected date and location if they exist
        if (selectedDate && selectedLocation) {
            // Fetch caterer data
            axios.get(`http://localhost:8081/getcatererdate?date=${selectedDate}&location=${selectedLocation}`)
                .then(res => {
                    setCaterers(res.data);
                })
                .catch(err => console.error('Error fetching caterer data:', err));

            // Fetch decor data
            axios.get(`http://localhost:8081/getdecordate?date=${selectedDate}&location=${selectedLocation}`)
                .then(res => {
                    setDecors(res.data);
                })
                .catch(err => console.error('Error fetching decor data:', err));

            // Fetch venue data
            axios.get(`http://localhost:8081/getvenuedate?date=${selectedDate}&location=${selectedLocation}`)
                .then(res => {
                    setVenues(res.data);
                })
                .catch(err => console.error('Error fetching venue data:', err));
        } else {
            // Fetch all data if no date and location are selected
            axios.get('http://localhost:8081/getcaterer')
                .then(res => {
                    setCaterers(res.data.Result);
                })
                .catch(err => console.error('Error fetching caterer data:', err));

            // Fetch decor data
            axios.get('http://localhost:8081/getdecor')
                .then(res => {
                    setDecors(res.data.Result);
                })
                .catch(err => console.error('Error fetching decor data:', err));

            // Fetch venue data
            axios.get('http://localhost:8081/getvenue')
                .then(res => {
                    setVenues(res.data.Result);
                })
                .catch(err => console.error('Error fetching venue data:', err));
        }
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

    const handleSeeVenue = () => {
        navigate('/venue');
    };

    const handleSeeCaterer = () => {
        navigate('/caterer');
    };

    const handleSeeDecorer = () => {
        navigate('/decorer');
    };
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
                                            <div className="grid-item-details-text-area">{caterer.address}</div>
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
                                            <div className="grid-item-details-text-area">{decor.address}</div>
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
                                            <div className="grid-item-details-text-area">{venue.address}</div>
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
            <div>
                <p> Date Filter :- </p>
                <input type="date" value={selectedDate} onChange={handleDateChange} />
                <p> Location Filter :- </p>
                <input type="text" value={selectedLocation} onChange={handleLocationChange} />
                <button onClick={handleFilter}>Apply Filters</button>
            </div>
        </>
    )
}
