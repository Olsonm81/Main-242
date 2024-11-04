/*By Matthew Olson CSCE 242*/
import "../css/Gallery.css";
const importAll = (resource) => {
    return resource.keys().map(resource);
};

const Gallery = () => {
    /*Imports all the images from the file gallery*/
    const gallery = importAll(
        require.context("../images/gallery", false, /\.(png|jpe?g|svg$)/)
    );
    /*This page is where I would have added the JSON information*/
    /*As stated in the <p>; the JSON would add more pictures/descriptions of the events that the company has done*/
    return (
        <>
            <div id="gallery-section">
            <div class="gallery-info" id="gal">
                
                <img src={gallery[1]} alt={gallery[1]} width="300" height="400"></img>
                <div id="arizona">
                    <h3>Arizona Deployment</h3>
                    <p>During the hot summer time fires were rampid in Arizona. We were successful in containing multiple fires. 
                        Our combined experience in firefighting and emergency medical care allowed for us to mange the situation 
                        effectivly. Overall, this allowed us to ensure the saftey and well-being of the community that the fire hit.
                    </p>
                </div>
                
                    <div id="washington">
                        <h3>Json informaition disclaimer</h3>
                        <p>This is where the Json would be used to fill in more pictures and descriptions of deployments 
                        that the company has been on. An example of what it would look like is on the left. 
                        (if it was not hard coded in of cources).
                        </p>
                    </div>
                
                </div>
            </div>
        </>
    );
};

export default Gallery;