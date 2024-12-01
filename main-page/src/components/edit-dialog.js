import "../css/dialog.css"
import React, { useState } from "react";

const EditDialog = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        state: props.state,
        city: props.city,
        fe: props.fe,
        date: props.date,
        people: props.people,
        description: props.description,
        prev_img: props.images
    });

    const [result, setResults] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const handleImageChange = (e) => {
        const name = e.target.name;
        const value = e.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        setResults("Sending....");
    
        const formData = new FormData(event.target);
        
        const response = await fetch(`https://main-242-backend.onrender.com/api/gallery/${props._id}`,{
          method:"PUT",
          body:formData
        });

        if(response.status===200) {
            setResults("Gallery information updated!");
            
            props.closeDialog();
            props.updateGallery(await response.json());
            event.target.reset();
            } else {
                console.log("Error editing gallery infromation", response);
                setResults(response.message);
            }
    };


    return (
      <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="state ">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={inputs.state || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="city ">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={inputs.city || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="fe ">Fire or EMS:</label>
              <input
                type="text"
                id="fe"
                name="fe"
                value={inputs.fe || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="date ">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={inputs.date || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="people ">People:</label>
              <input
                type="text"
                id="people"
                name="people"
                value={inputs.people || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="description ">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
                required
              />
            </p>


           
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? inputs.prev_img
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default EditDialog;