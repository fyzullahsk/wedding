import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./venue.css";
import {  useNavigate } from "react-router-dom";

export default function Venue(){
    const navigate = useNavigate();
    const navigateToAddVenue = () => {
        navigate("/AddVenue");
    };

    const navigateToUpdateVenue = () => {
        navigate("/UpdateVenue");
    };
    return(
        <>
        <AdminNavbar/>
        <div className="manage-venue-outer-container">
            <div className="manage-venue-outer-container-title">
                Manage Venues
            </div>
            <div className="manage-venue-outer-container-subtitle">
                Selct an option to Manage Venues
            </div>
            <div className="button-group">
                <input type="button" value="Add New Venue" onClick={navigateToAddVenue}/>
                <input type="button" value="Update Venue" onClick={navigateToUpdateVenue}/>
                <input type="button" value="Delete Venue" />
            </div>
        </div>
        </>
    );
}