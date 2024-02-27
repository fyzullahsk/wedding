import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
export default function Decors(){
    return(
        <>
        <AdminNavbar/>
        <div className="manage-venue-outer-container">
            <div className="manage-venue-outer-container-title">
                Manage Decorers
            </div>
            <div className="manage-venue-outer-container-subtitle">
                Selct an option to Manage Decorers
            </div>
            <div className="button-group">
                <input type="button" value="Add New Decorers" />
                <input type="button" value="Update Decorers" />
                <input type="button" value="Delete Decorers" />
            </div>
        </div>
        </>
    );
}