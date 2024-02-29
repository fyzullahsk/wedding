import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";

import "./venue.css";

const UpdateVenue = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the venue ID from the URL params
    const [venueData, setVenueData] = useState({
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        name: "",
        address: "",
        capacity: "",
        price: ""
    });

    // Fetch venue data from the server based on the ID
    useEffect(() => {
        const fetchVenueData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/getvenue/${id}`);
                const { img1, img2, img3, img4, name, address, capacity, price } = response.data;
                setVenueData({ img1, img2, img3, img4, name, address, capacity, price });
            } catch (error) {
                console.error("Error fetching venue data:", error);
            }
        };
        fetchVenueData();
    }, [id]);

    const handleChange = (event) => {
        setVenueData({ ...venueData, [event.target.name]: event.target.value });
    };

    const handleCancel = () => {
        navigate("/managevenues");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8081/updatevenue/${id}`, venueData);
            console.log(response.data); // Handle successful response
            // Redirect or any other desired action
            navigate("/managevenues");
        } catch (error) {
            console.error("Error:", error.response.data);
            // Handle error, display error messages, etc.
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="manage-venue-outer-container crud-form">
                <div className="manage-venue-outer-container-title">Update Venue</div>
                <div className="manage-venue-outer-container-subtitle">Fill out the form to update venue information</div>
                <form onSubmit={handleSubmit}>
                    <div className="button-group add">
                        <div className="category-crud-input">
                            <label>Venue Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter venue Name"
                                value={venueData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Venue Location</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter venue location"
                                value={venueData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Capacity</label>
                            <input
                                type="text"
                                name="capacity"
                                placeholder="Enter venue Capacity"
                                value={venueData.capacity}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Enter venue Price"
                                value={venueData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="category-crud-input-images-section">
                        <div className="category-crud-input-images-title">Upload Image Urls</div>
                        <div className="category-crud-input-images">
                            <div className="category-crud-input">
                                <label>Image #1</label>
                                <input
                                    type="text"
                                    name="img1"
                                    placeholder="Enter Image #1 URL"
                                    value={venueData.img1}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="category-crud-input">
                                <label>Image #2</label>
                                <input
                                    type="text"
                                    name="img2"
                                    placeholder="Enter Image #2 URL"
                                    value={venueData.img2}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="category-crud-input">
                                <label>Image #3</label>
                                <input
                                    type="text"
                                    name="img3"
                                    placeholder="Enter Image #3 URL"
                                    value={venueData.img3}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="category-crud-input">
                                <label>Image #4</label>
                                <input
                                    type="text"
                                    name="img4"
                                    placeholder="Enter Image #4 URL"
                                    value={venueData.img4}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="category-crud-buttons">
                        <input type="submit" value="Update" />
                        <input type="button" value="Cancel" onClick={handleCancel} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default UpdateVenue;
