import "../css/Training.css";
import React from 'react';

const importAll = (resource) => {
    return resource.keys().map(resource);
};

const Training = () => {
    /*Takes all of the images from the folder and adds it to the array of train*/
    const train = importAll(
        require.context("../images/training", false, /\.(png|jpe?g|svg$)/)
    );
    /*Uses [1] and such to get the images from the array*/
    /*Also contains a link that allows a user to get more information on the training*/
    return (
        <>
            <div id="train-section">
                <div class="train-info">
                    <div id="aa-p-t">
                        <h3>AA Paramedic Training</h3>
                        <img src={train[1]} alt={train[1]}></img>
                        <a href="https://www.midlandstech.edu/programs-and-courses/health-care/paramedic-training-certificate">More info</a>    
                        <p>This training is a course that a person can take in college. The training challanges
                            people and ensures that they are able to confidently take charge of every situation. 
                            This can ensure that people know how to quickly react to different situations that may arise.
                        </p>
                    </div>
                    <div id="NFPA-fire">
                        <h3>NFPA Fire Officer 1</h3>
                        <img src={train[0]} alt={train[0]}></img>
                        <a href="https://www.nfpa.org/for-professionals/certification">More info</a>
                        <p>Mutiple course are required to be ceritied as a fire officer 1. These courses are designed to allow for understanding
                            of the responsibilities and duties of a company officer at a fire department. These can be useful to know when in-charge of 
                            a small team as it can help develp team-work and guidance for some scnarios that may occur when on the job.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Training;