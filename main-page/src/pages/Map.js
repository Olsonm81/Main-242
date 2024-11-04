import "../css/Map.css";

const importAll = (resource) => {
    return resource.keys().map(resource);
};



const Map = () => {
/*Imports the map from the folder*/
    const map = importAll(
        require.context("../images/map", false, /\.(png|jpe?g|svg$)/)
    );
    /*Prints the map*/
    return(
        <>

            <div id="map-section">
                <div class="map-info">
                    <img src={map[0]} alt="Map of all of the places in the US the company has been"></img>
                </div>
            </div>

        </>
    );
};

export default Map;