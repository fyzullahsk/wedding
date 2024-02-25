import React from "react";
import './Registration.css';
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <>
            <div className="heading">
                <h1>Registration</h1>
            </div>
            <div className="form-container">
                <div className="item">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" autoComplete="off" required />
                </div>
            </div>
            <div className="registration-buttons">
                <input type="submit" value="Submit" />
                <input type="button" value="Cancel" onClick={handleCancel} />
            </div>
        </>
    )
}
