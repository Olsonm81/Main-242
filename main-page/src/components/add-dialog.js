import "../css/dialog.css";
import React, {useState} from "react";
/*Most code from add-dialog is from the CSCE 242: Post Request with React video*/
/*Changed small parts of the code to match my website such as the labels and inputs*/

const AddDialog = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResults] = useState("");


  const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs((values) => ({...values, [name]: value}));
  }

  const handleImageChange = (e) => {
      const name = e.target.name;
      const value = e.target.files[0];
      setInputs((values) => ({...values, [name]: value}));
  }

    const onSubmit = async (event) => {
        event.preventDefault();
        setResults("Sending to server....");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch("https://main-242-backend.onrender.com/api/gallery/" , {
            method: "POST",
            body: formData,
        });

        if(response.status === 200) {
            setResults("Gallery Information Successfully Added!");
            props.AddToGallery(await response.json());
            event.target.reset();
            props.closeDialog();
        } else {
            setResults(response.message);
        }


    };


    return (
        <div id="add-dialog" className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
              &times;
            </span>
            <form id="add-property-form" onSubmit={onSubmit}>
              <p>
                <label htmlFor="state">State: </label>
                <input type="text" id="state" name="state" required value={inputs.state || ""} onChange={(handleChange)} />
              </p>
              <p>
                <label htmlFor="city">City: </label>
                <input type="text" id="city" name="city" required value={inputs.city || ""} onChange={(handleChange)} />
              </p>
              <p>
                <label htmlFor="fe">Fire or EMS: </label>
                <input type="text" id="fe" name="fe" required value={inputs.fe || ""} onChange={(handleChange)} />
              </p>
              <p>
                <label htmlFor="date">Date: </label>
                <input type="date" id="date" name="date" required value={inputs.date || ""} onChange={(handleChange)} />
              </p>
              <p>
                <label htmlFor="people">Personal: </label>
                <input type="text" id="people" name="people" required value={inputs.people || ""} onChange={(handleChange)} />
              </p>
              <p>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" name="description" required value={inputs.description || ""} onChange={(handleChange)} />
              </p>
              <section className="columns">
                <p id="img-prev-section">
                    <img id="img-prev" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""} alt=""/>
                </p>
              </section>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" onChange={handleImageChange} accept="image/*"/>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </form>
            <p>{result}</p>
          </div>
        </div>
      </div>
    );

    
};

export default AddDialog;