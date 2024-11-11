import {Outlet, Link} from "react-router-dom";
import "./css/Layout.css";
import React from 'react';
import Header from "./components/Header";
const Layout = () => {
    /*Main header for the main site page*/
    return (
        <>
            <Header />

            <nav id="main-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;