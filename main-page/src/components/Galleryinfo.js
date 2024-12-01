import "../css/GalleryInfo.css";
import React, {useState} from 'react';
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";

const GalleryInfo = (galleryInformation, city) => {
    const imageSrc = `${galleryInformation.images}`;
    const [showEditDialog, setShowEditDialog ] = useState (false);
    const [showDeleteDialog, setShowDeleteDialog] = useState (false);
    const [ShowGalleryInfo, setShowGalleryInfo] = useState (true);
    const [galleryInfo, setGalleryInfo] = useState(galleryInformation);

    const openEditDialog = () => {
        setShowEditDialog(true);
    }

    const closeEditDialog = () => {
        setShowEditDialog(false);
    }

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    }

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    }

    const editGallery = (galleryInfo) => {
        setGalleryInfo(galleryInfo);
    }
    const hideGalleryInfo = (galleryInfo) => {
        setShowGalleryInfo(false);
    }
console.log(galleryInformation)
    return (
        <>
        {ShowGalleryInfo ? (
            <div class="gallery-info">

                {showDeleteDialog ? <DeleteDialog 
                    closeDialog={closeDeleteDialog}
                    hideGalleryInfo={hideGalleryInfo}
                    _id={galleryInfo._id}
                    state={galleryInfo.state}
                /> : ""}

                {showEditDialog ? (<EditDialog 
                    closeDialog={closeEditDialog}
                    updateGallery={editGallery}
                    _id={galleryInfo._id}
                    state={galleryInfo.state}
                    city={galleryInfo.city}
                    fe={galleryInfo.fe}
                    date={galleryInfo.date}
                    people={galleryInfo.people}
                    description={galleryInfo.description}
                    images={imageSrc}
                />
                ) : (
                ""
                )}
                

                <img src={imageSrc} alt={galleryInfo.state}/>
                <div id="state">
                    <h3>{galleryInfo.state}</h3>
                    <section id="change-buttons">
                        <a herf="#" onClick={openEditDialog}>
                            &#9998;
                        </a>
                        <a herf="#" onClick={openDeleteDialog}>
                            &#x2715;
                        </a>
                    </section>
                    
                    <p>{galleryInfo.description}</p>
                </div>
            </div>
        ) : (
          ""
        )}
        </>
    );
};

export default GalleryInfo;