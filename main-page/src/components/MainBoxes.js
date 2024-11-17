import React from 'react';
import { Link } from "react-router-dom";

const MainBoxes = (mainBoxes) => {

    return (
            <div className="boxes">
                <section className="small-columns">
                    <Link to = {mainBoxes.link} >
                            <div id= {mainBoxes.id}>
                                <img src={mainBoxes.image} alt={mainBoxes.alt}/>
                                <p>{mainBoxes.text}</p>
                            </div>
                    </Link>
                </section>
            </div>
    )
};

export default MainBoxes;