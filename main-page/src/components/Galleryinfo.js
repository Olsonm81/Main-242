import "../css/GalleryInfo.css";
import React from 'react';

const GalleryInfo = (galleryInfomation) => {
    const imageSrc = `${galleryInfomation.images}`;

    return (
        <div class="gallery-info">
            <img src={imageSrc} alt={galleryInfomation.state}/>
            <div id={galleryInfomation.state}>
                <h3>{galleryInfomation.state}</h3>
                <p>{galleryInfomation.description}</p>
            </div>
        </div>
    );
};

export default GalleryInfo;