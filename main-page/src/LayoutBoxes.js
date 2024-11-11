/*By Matthew Olson CSCE 242*/

import {Outlet, Link} from "react-router-dom";
import "./css/Layout.css";
import React from 'react';
import HeaderBox from "./components/HeaderBoxes";

const LayoutBoxes = () => {
    /*This nav contains all of the links and is used for every site other then the main*/
    return (
        <>
            <HeaderBox />
            
            <nav id="main-nav">
                <Link to="/">Home</Link>
                <Link to="/training">Training/Certificates</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/employees">Employees</Link>
                <Link to="/map">Map</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default LayoutBoxes;