import {Outlet, Link} from "react-router-dom";
import "./css/Layout.css";
import {useState} from 'react';
import React from 'react';
import Header from "./components/Header";
const Layout = () => {
    /*Main header for the main site page*/
    const [menuOpen, SetMenuOpen] = useState(false);

    const toggleMenu = () => {
        SetMenuOpen(!menuOpen);
    }

    return (

        <>
            <Header />

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

export default Layout;