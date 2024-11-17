import "../css/Home.css";
import React from 'react';
import MainBoxes from "../components/MainBoxes";

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
            <MainBoxes
                link={"/training"}
                id={"train-cerf"}
                image={images[2]}
                alt={"Training/Certificates"}
                text={"Training/Certificates"}
            />
            <MainBoxes
                link={"/gallery"}
                id={"gallery"}
                image={images[1]}
                alt={"Gallery page"}
                text={"Gallery"}
            />
            <MainBoxes
                link={"/map"}
                id={"whereBeen"}
                image={images[3]}
                alt={"Locations we have been to page"}
                text={"Where we've been"}
            />
            <MainBoxes
                link={"/employees"}
                id={"employees"}
                image={images[0]}
                alt={"Employee pages"}
                text={"Employees"}
            />
        </section>
        </>

    );
};

export default Home;