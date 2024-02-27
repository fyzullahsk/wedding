import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
export default function Caterers(){
    return(
        <>
        <AdminNavbar/>
        <div className="manage-venue-outer-container">
            <div className="manage-venue-outer-container-title">
                Manage Caterers
            </div>
            <div className="manage-venue-outer-container-subtitle">
                Selct an option to Manage Caterers
            </div>
            <div className="button-group">
                <input type="button" value="Add New Caterer" />
                <input type="button" value="Update Caterer" />
                <input type="button" value="Delete Caterer" />
            </div>
        </div>
        </>
    );
}