/*By Matthew Olson CSCE 242*/
/*Main header for the site*/
import "../css/Header.css";
import React from 'react';

const Header = () => {

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/logo", false, /\.(png|jpe?g|svg$)/)
    );

    return (
        <header id="head">
            <img id="head-logo" src={images[0]} alt={images[0]} width="150" height="150"></img>
            <h1>Emergency Response Fire Medical LLC</h1>
        </header>
    );
};

export default Header;