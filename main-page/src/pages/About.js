/*By Matthew Olson CSCE 242*/
import "../css/About.css";
import React from 'react';

const importAll = (resource) => {
    return resource.keys().map(resource);
};

const About = () => {
    /*Gets the images from the about file*/
    const about = importAll(
        require.context("../images/About", false, /\.(png|jpe?g|svg$)/)
    );
    return (
        <>
            <div id="about-section">
                <div class="about-info">
                    <div id="what-d">
                        <h3>What we do</h3>
                        <p>Medical Care for the public and wildland firefighters including all the government employees on and off the fireline.  
                            We can respond in UTV's or 4x4 trucks, we will go wherever the need is.  They risk their lives for the communities, 
                            so they deserve no less from us. We strive to bring the best patient care and service on every contract.</p>
                    </div>
                    <img src={about[2]} alt={about[2]} width="400" height="300"></img>
                    <img src={about[1]} alt={about[1]} width="300" height="300"></img>
                    <div id="what-b">
                        <h3>What we believe</h3>
                        <p>We are more than a team, we are a family.  At ERFM, LLC we are all a part of the family and work together seamlessly.  
                            We look out for each other and all other rescuers including our customers and patients we provide medical services 
                            too.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;