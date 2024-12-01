import "../css/dialog.css"
import React, { useState } from "react";

const DeleteDialog = (props) => {

    const [result, setResult] = useState("");

    const deleteGalleyInfo = async() => {
        const response = await fetch(`http://localhost:3001/api/gallery/${props._id}`,{
            method:"DELETE"
        });
        
        if(response.status === 200){
            setResult("Gallery Info successfully delete");
            props.hideGalleryInfo();
            props.closeDialog();
        } else {
            setResult("Sorry, we couldn't delete your gallery information at this time.");
        }
    };

    return (
        <>
            <div id="delete-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                <span
                    id="dialog-close"
                    className="w3-button w3-display-topright"
                    onClick={props.closeDialog}
                >
                    &times;
                </span>
                <div id="delete-content">
                    <h3>Are you sure you want to delete the {props.state}</h3>
                    <section>
                    <button onClick={props.closeDialog}>No</button>            
                    <button onClick={deleteGalleyInfo}>Yes</button>
                    </section>
                    <span>{result}</span>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default DeleteDialog;