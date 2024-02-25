import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
export default function CategoryDetails() {
    return (
        <>
            <Navbar />
            <div className="list">
                <div className="category-name">
                    Venue
                </div>
                <div>
                    <div className="custom-grid-container">
                        <div className="custom-grid-item">1</div>
                        <div className="custom-grid-item">2</div>
                        <div className="custom-grid-item">3</div>
                        <div className="custom-grid-item">4</div>
                        <div className="custom-grid-item">5</div>
                        <div className="custom-grid-item">6</div>
                    </div>
                </div>
            </div>
        </>
    )
}