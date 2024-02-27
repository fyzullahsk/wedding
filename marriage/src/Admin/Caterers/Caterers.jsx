import React, { useEffect, useState } from 'react';
import './Caterers.css';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
export default function Caterers(){
    return(
        <>
        <AdminNavbar/>
        <p>Caterers</p>
        </>
    );
}

export default Caterers;