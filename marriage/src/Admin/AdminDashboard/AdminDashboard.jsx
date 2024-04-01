import React from "react";
import "./AdminDashboard.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import NumberAnimator from "../../Components/NumberAnimator";

export default function AdminDashboard() {
    const DashboardItem = (name, value) => {
        return (
            <div className="admin-dashboard-item">
                <div className="admin-dashboard-item-title">
                    <span>{name}</span>
                    <div className="Numbers-count">
                        <NumberAnimator counter={value}/>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <AdminNavbar />
            <div className="admin-dashboard">
                <React.Fragment key="Decorers">{DashboardItem('Decorers', 10)}</React.Fragment>
                <React.Fragment key="Venuers">{DashboardItem('Venuers', 20)}</React.Fragment>
                <React.Fragment key="Caterers">{DashboardItem('Caterers', 30)}</React.Fragment>
                <React.Fragment key="Total">{DashboardItem('Total', 40)}</React.Fragment>
            </div>

            <div className="admin-dashboard">
                <React.Fragment key="LastMonthDecorers">{DashboardItem('Last Month Decorers Booked', 10)}</React.Fragment>
                <React.Fragment key="LastMonthVenuers">{DashboardItem('Last Month Venuers Booked', 20)}</React.Fragment>
                <React.Fragment key="LastMonthCaterers">{DashboardItem('Last Month Caterers Booked', 30)}</React.Fragment>
                <React.Fragment key="TotalBookings">{DashboardItem('Total Bookings', 40)}</React.Fragment>
            </div>
        </>
    );
}
