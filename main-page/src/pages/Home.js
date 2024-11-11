import "../css/Home.css";
import { Link } from "react-router-dom";
import React from 'react';

const importAll = (resource) => {
    return resource.keys().map(resource);
};

const Home = () => {
    /*Adds images for the logo into a different var to keep it seperate*/
    const logo = importAll(
        require.context("../images/logo", false, /\.(png|jpe?g|svg$)/)
    );
    /*Adds images for the different boxes into one var*/
    const images = importAll(
        require.context("../images/boxes-Icons", false, /\.(png|jpe?g|svg$)/)
    );
    
    /*Has different sections for the main mission of the company and the links to the different area of the site*/
    return (
        <>
        <section id="main-section">
            <img src={logo[0]} alt={logo[0]} width="304" height="304"></img>
            <div id="mission">
                <h3>Our Mission</h3>
                <p> At Emergency Response Fire Medical, LLC, our mission is to deliver expert medical care 
                    and firefighting services. With our decades of experiences between us as EMT's, paramedics, and 
                    government contractors, we are committed to ensuring we provide saftey and well-being for others. 
                    Through our multitudes of trainings and certificates we strive to stay at the forefront of medical
                    knowledge to provide exceptional care no matter the situation.</p>
            </div>
        </section>
        
        <section id="different-pages">
            <div class="boxes">
                <section class="small-columns">
                    <Link to="/training">
                            <div id="train-cerf">
                                <img src={images[2]} alt="Training/Certificates" />
                                <p>Training/Certificates</p>
                            </div>
                    </Link>
                </section>
            </div>

            <div class="boxes">
                <section class="small-columns">
                <Link to="/gallery">
                        <div id="gallery">
                        <img src={images[1]} alt="Gallery page" />
                            <p>Gallery</p>
                        </div>
                    </Link>
                </section>
            </div>

            <div class="boxes">
                <section class="small-columns">
                <Link to="/map">
                        <div id="whereBeen">
                        <img src={images[3]} alt="Locations we have been to page" />
                            <p>Where we've been</p>
                        </div>
                    </Link>
                </section>
            </div>

            <div class="boxes">
                <section class="small-columns">
                <Link to="/employees">
                        <div id="employees">
                        <img src={images[0]} alt="Employee pages" />
                            <p>Employees</p>
                        </div>
                    </Link>
                </section>
            </div>
        </section>
        </>

    );
};

export default Home;