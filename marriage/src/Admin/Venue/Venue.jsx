import React, { useEffect, useState } from 'react';
import './venue.css';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
export default function Venue(){
    return(
        <>
        <AdminNavbar/>
        Venue
        </>
    );
}

export default Venue;