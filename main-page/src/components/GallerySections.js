import { useState, useEffect } from "react";
import axios from "axios";
import GalleryInfo from "./Galleryinfo";
import React from 'react';
import AddDialog from "./add-dialog";


const GallerySections = () => {
    const [gallerys, setGallerys] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
      (async () => {
        const response = await axios.get("https://main-242-backend.onrender.com/api/gallery/");
        setGallerys(response.data);
      })();
    }, []);

    const openAddDialog = () => {
      setShowAddDialog(true);
    };

    const closeAddDialog = () => {
      setShowAddDialog(false);
    };

    const AddToGallery = (galleryInfo) => {
      setGallerys((gallerys) => [...gallerys, galleryInfo]);
    };

    return (
      <>
          <div id="add-button">
            <button id="add-gallery" onClick={openAddDialog}>+</button>
            <p>Add gallery information</p>
          </div>
          {showAddDialog ? (<AddDialog closeDialog={closeAddDialog} AddToGallery={AddToGallery} />) : ("")}
          
        
          <div id="gallery-section">
              {gallerys.map((galleryInfomation) => (
              <GalleryInfo
                  key={galleryInfomation.state}
                  _id={galleryInfomation._id}
                  state={galleryInfomation.state}
                  city={galleryInfomation.city}
                  fe={galleryInfomation.fe}
                  date={galleryInfomation.date}
                  people={galleryInfomation.people}
                  description={galleryInfomation.description}
                  images = {galleryInfomation.images}
              />
              ))}
          </div>
        </>
    )
};

export default GallerySections;