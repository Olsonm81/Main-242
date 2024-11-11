import { useState, useEffect } from "react";
import axios from "axios";
import GalleryInfo from "./Galleryinfo";


const GallerySections = () => {
    const [gallerys, setGallerys] = useState([]);
  
    useEffect(() => {
      (async () => {
        const response = await axios.get("https://main-242-backend.onrender.com/api/gallery");
        setGallerys(response.data);
      })();
    }, []);

    return (
        <div id="gallery-section">
            
            {gallerys.map((galleryInfomation, index) => (
            <GalleryInfo
                key={index}
                state={galleryInfomation.state}
                description={galleryInfomation.description}
                images = {galleryInfomation.images}
            />
            ))}
        </div>
    )
};

export default GallerySections;