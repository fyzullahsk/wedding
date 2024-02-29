import React, { useEffect, useState } from 'react';
import './Caterers.css';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
export default function Caterers(){
    return(
        <>
        <AdminNavbar/>
        <p>Caterers</p>
        </>
    );
}
