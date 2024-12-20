import "../css/Contact.css";
import React from 'react';

const importAll = (resource) => {
    return resource.keys().map(resource);
};
/*Function from the web3 school website*/
//Added my personal access key
//Functions purpose is to prevent the default of redirecting the site to web3 submit
function Contact() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "78ad6aeb-612d-457e-a1df-7e3220ddf49d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    /*Gets the images from the about file*/
    const icon = importAll(
        require.context("../images/Icons", false, /\.(png|jpe?g|svg$)/)
    );
    return (
        <>
            <section id="contact-section">
                <div class="contact-info" id="contact-information">
                    <h3>Reach out to find more!</h3>
                    <form onSubmit={onSubmit}>
                            <p>
                                <label for="name">Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    required
                                />
                            </p>    
                            <p>
                                <label for="email">Email:</label>
                                <input 
                                    id="email" 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter your Email"
                                    required 
                                />
                            </p>
                            <p>
                                <label for="phone">Phone Number:</label>
                                <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="Enter your Phone Number"
                                    required
                                    />
                            </p>
                            <p>
                                <label for="Interested in">Interested in:</label>
                                <textarea id="interest" name="Interested in" placeholder="I'm interested in..."></textarea>
                            </p>
                            <p>
                                <label for="Other Notes">Other Notes:</label>
                                <textarea id="otherNotes" name="Other Notes" placeholder="Other notes"></textarea>
                            </p>
                            <div id="centerButton">
                                <button  id="submit" type="submit">Submit Form</button>
                            </div>
                        </form>
                        <p id="results" className="hidden"><span id="result">{result}</span></p>

                    </div>
                <div id="ourInfo-Location">
                    <div class="contact-info" id="ourInfo">
                        <h3>Where you can find us!</h3>
                        <div id="address">
                        <img src={icon[1]} alt={icon[1]}></img>
                        <p>Spartanburg, SC, 29301</p>
                        </div>
                        <div id="phoneNumber">
                        <img src={icon[2]} alt={icon[2]}></img>
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
        <footer class="contact-info" id="contactFooter">
          <p>Icons created by:
            <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Dave Gandy - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Uniconlabs - Flaticon</a> 
            <a href="https://www.flaticon.com/free-icons/location" title="location icons">Location icons created by Freepik - Flaticon</a></p>
              <p>Emergency Response Fire Medical, LLC
              Spartanburg, South Carolina, United States
              1-760-445-4477 
              Copyright © 2024 Emergency Response Fire Medical, LLC - All Rights Reserved.</p>
        </footer>

        </>
    );
};

export default Contact;