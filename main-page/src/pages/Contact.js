import "../css/Contact.css";

const Contact = () => {
    /*This contact section is one that I used when starting the project*/
    /*Once we learn how to do the Iframe and forms I will make it look like the previous contact us page*/
    return (
        <>
            <div id="contact-section">
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
                <nav id="submit">
                    <ul>
                        <li><button id="submit">Submit</button></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    );
};

export default Contact;