import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";

export default function UpdateCaterers() {
    const navigate = useNavigate();
    const handlecancel = () => {
        navigate("/managevenues");
    }
    return (
        <>
            <AdminNavbar />
            <div className="manage-venue-outer-container crud-form">
                <div className="manage-venue-outer-container-title">
                    Add New Venue
                </div>
                <div className="manage-venue-outer-container-subtitle">
                    Fill out the form to add a new venuer
                </div>
                <div className="button-group add">
                    <div className="category-crud-input">
                        <label>venue Name</label>
                        <input type="text" placeholder="Enter venue Name" required />
                    </div>
                    <div className="category-crud-input">
                        <label>venue location</label>
                        <input type="text" placeholder="Enter venue location" required />
                    </div>
                    <div className="category-crud-input">
                        <label>Capacity</label>
                        <input type="text" placeholder="Enter venue Capacity" required />
                    </div>
                    <div className="category-crud-input">
                        <label>Price</label>
                        <input type="text" placeholder="Enter venue Price" required />
                    </div>
                    <div className="category-crud-input">
                        <label>venuer Name</label>
                        <input type="text" placeholder="Enter venuer Name" required />
                    </div>
                    <div className="category-crud-input">
                        <label>venuer Mobile</label>
                        <input type="text" placeholder="Enter venuer Mobile Number" required />
                    </div>
                </div>
                <div className="category-crud-input-images-section">
                    <div className="category-crud-input-images-title">
                        Upload Image Urls
                    </div>
                    <div className="category-crud-input-images">
                        <div className="category-crud-input">
                            <label>Image #1</label>
                            <input type="text" placeholder="Enter Image #1 URL" required />
                        </div>
                        <div className="category-crud-input">
                            <label>Image #2</label>
                            <input type="text" placeholder="Enter Image #2 URL" required />
                        </div>
                        <div className="category-crud-input">
                            <label>Image #3</label>
                            <input type="text" placeholder="Enter Image #3 URL" required />
                        </div>
                        <div className="category-crud-input">
                            <label>Image #3</label>
                            <input type="text" placeholder="Enter Image #4 URL" required />
                        </div>
                    </div>
                </div>
                <div className="category-crud-buttons">
                    <input type="button" value="Add" />
                    <input type="button" value="Cancel" onClick={handlecancel} />
                </div>
            </div>
        </>
    );
}