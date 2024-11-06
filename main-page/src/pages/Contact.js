import "../css/Contact.css";

const importAll = (resource) => {
    return resource.keys().map(resource);
};

const Contact = () => {
    /*This contact section is one that I used when starting the project*/
    /*Once we learn how to do the Iframe and forms I will make it look like the previous contact us page*/

    /*Gets the images from the about file*/
    const icon = importAll(
        require.context("../images/Icons", false, /\.(png|jpe?g|svg$)/)
    );

    return (
        <>
            <section id="contact-section">
                <div class="contact-info">
                    <h2>Reach out to find more!</h2>
                    <h3>Name</h3>
                    <p>Enter your Name</p>
                    <h3>Email</h3>
                    <p>Enter your email</p>
                    <h3>Phone Number</h3>
                    <p>Enter your Phone Number</p>
                    <h3>Comments</h3>
                    <p>Type here</p>
                    <div id="centerButton">
                        <button id="submit">Submit</button>
                    </div>
                    
                </div>
                <div id="ourInfo-Location">
                    <div class="contact-info" id="ourInfo">
                        <h3>Where you can find us!</h3>
                        <div id="address">
                        <img src={icon[0]} alt={icon[0]}></img>
                        <p>Spartanburg, SC, 29301</p>
                        </div>
                        <div id="phoneNumber">
                        <img src={icon[0]} alt={icon[0]}></img>
                        <p>1-760-445-4477</p>
                        </div>
                        <div id="emailUs">
                        <img src={icon[0]} alt={icon[0]}></img>
                        <p>ERFMLLC@gmail.com</p>
                        </div>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52330.803410176435!2d-81.966330448413!3d34.93968164573733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88579e19a697460b%3A0x5b8b2838cada7ec9!2sSpartanburg%2C%20SC!5e0!3m2!1sen!2sus!4v1730046972937!5m2!1sen!2sus"
                         allowfullscreen="" 
                        loading="lazy" 
                        title="Location of LLC"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>

        </>
    );
};

export default Contact;