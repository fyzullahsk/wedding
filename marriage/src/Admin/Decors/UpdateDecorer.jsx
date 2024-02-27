import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import {  useNavigate } from "react-router-dom";
export default function UpdateDecorer(){
    const navigate = useNavigate();
    const handlecancel =() =>{
        navigate("/managevenues");
    }
    return(
        <>
        <AdminNavbar/>
        <div className="manage-venue-outer-container crud-form">
        <div className="manage-venue-outer-container-title">
                Add New Venue
            </div>
            <div className="manage-venue-outer-container-subtitle">
                Fill out the form to add a new venuer
            </div>
            <div className="button-group add">
            <div className="category-crud-input">
                    <label>venuer Name</label>
                    <input type="text" placeholder="Enter venuer Name" required />
                </div>
                <div className="category-crud-input">
                    <label>venuer location</label>
                    <input type="text" placeholder="Enter venuer location" required />
                </div>
                <div className="category-crud-input">
                    <label>Menu</label>
                    <input type="text" placeholder="Enter venuer Menu" required />
                </div>
                <div className="category-crud-input">
                    <label>Price</label>
                    <input type="text" placeholder="Enter venuer Price" required />
                </div>
                <div className="category-crud-buttons">
                <input type="button" value="Add"/>
                <input type="button" value="Cancel" onClick={handlecancel}/>
                </div>
            </div>
        </div>
        </>
    );
}