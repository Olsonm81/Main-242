/*By Matthew Olson CSCE 242*/
import {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import "./css/Layout.css";
import React from 'react';
import HeaderBox from "./components/HeaderBoxes";

const LayoutBoxes = () => {
    const [menuOpen, SetMenuOpen] = useState(false);

    const toggleMenu = () => {
        SetMenuOpen(!menuOpen);
        //testing toggle nav
        /*console.log(menuOpen);*/
    }
    /*This nav contains all of the links and is used for every site other then the main*/
    return (
        <>
            <HeaderBox />

            <div id="toggle" onClick={(toggleMenu)}>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>

            <nav id="main-nav" className={menuOpen ? "" : "hide-small"}>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/training">Training/Certificates</Link>
                    </li>
                    <li>
                    <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                    <Link to="/employees">Employees</Link>
                    </li>
                    <li>
                    <Link to="/map">Map</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                </ul> 
            </nav>
            <Outlet />
        </>
    );
};

export default LayoutBoxes;