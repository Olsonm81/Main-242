/*By Matthew Olson CSCE 242*/
import "../css/Employees.css";
import React from 'react';

const importAll = (resource) => {
    return resource.keys().map(resource);
};

const Employees = () => {
    /*Imports all the images from the file about*/
    const group = importAll(
        require.context("../images/About", false, /\.(png|jpe?g|svg$)/)
    );
    const employees = importAll(
        require.context("../images/employees", false, /\.(png|jpe?g|svg$)/)
    );

    /*About section talks about the team and shows the team in action*/
    /*Working to add individual pictures and descriptions of all of the employees*/
    /*<section id="employee">
                    <h2>Team members</h2>
                    <div id="team-members">
                        <div id="Jason" class="employeeBio">
                            <img src={employees[1]} alt ={employees[1]}></img>
                            <p>As the owner and founder of ERFM, a South Carolina EMS agency, I come with decades of emergency response experience.  I have worked as a paramedic in a busy 911 system and a rural 911 system for over a decade.  I also have multiple years at a small local fire department, many of which I was a captain and oversaw all the paid staff.  I also have experience working for United States Department of the Interior as a wildland firefighter. Currently I oversee operations and go out on assignment for ERFM.</p>
                        </div>
                        <div id="Adam" class="employeeBio">
                            <img src={employees[0]} alt = {employees[1]}></img>
                            <p>Adam has multiple years of experience working as a medic in the Army, and as a flight medic for multiple years.  Since he has been working for busy 911 EMS services and is excited to finally have the title of NWCG Firefighter 2. He has been on numerous contracts over the last few years.  Adam is also a certified ropes technician. and oversees field training of new employees.  </p>
                        </div>
                        <div id="Ismail" class="employeeBio">
                            <img src={employees[4]} alt = {employees[1]}></img>
                            <p>Junior has been working both with contracts across the county, and 911 for over the last five plus years.  He is always excited to experience new areas in the emergency services field.  Junior will be attending paramedic school in 2025, and we are all looking forward to watching him grow as a provider.</p>
                        </div>
                        <div id="kevin" class="employeeBio">
                            <img src={employees[3]} alt = {employees[1]}></img>
                            <p>Kevin came to us this year for his fire wildland fire contract.  He has extensive fire service experience from being a ropes technician to EVDT, and is a fire instructor to name a few of his accomplishments.  He works 911 EMS part time currently as well as a full time structural firefighter.  We are fortunate to have someone with his level of training and expertise in the field.</p>
                        </div>
                        <div id ="Edward" class="employeeBio">
                            <img src={employees[2]} alt = {employees[1]}></img>
                            <p>Eddie comes to us from Columbia, he also has residence in Greenville SC and dual citizenship.  He has experience as a provider from New York, and he also was an instructor overseeing skills labs at the local community college.  Eddie truly is excited to be a part of the ERFM team.</p>
                        </div>
                        <div id = "Robert" class="employeeBio">
                            <img src={employees[1]} alt = {employees[1]}></img> 
                            <p>Robbie comes to ERFM with many years of experience working at both 911 and IFT as a paramedic.  Previously he has worked for the State of South Carolina and is a very experienced paramedic.  Currently he is planning and assisting with all ERFM trainings in the classroom.</p>
                        </div>
                        <div id = "Bree" class="employeeBio">
                            <img src={employees[0]} alt = {employees[1]}></img>
                            <p>Bre is a medic working in a 911 system currently and is a team player.  She is excited to be a part of the team and is a graduate of the paramedic program I assisted teaching with.  She has her rope operations certification, and is continually looking for new classes and areas to grow in.</p>
                        </div>
                    </div>
                </section>*/
    return (
        
        <>
            <div id="employee-section">
            <div class="employee-info">
                
                <h2><strong>Meet the Team!</strong></h2>
                <div id="team-info">
                    <img src={group[0]} alt={group[0]} width="400" height="300"></img>
                    <p>We are a vast and hardworking team who gets the job done. We are currently comprised of 8 employees.
                        All of us combined have over 50 years of ongoing fire and medical experience. This company started with 
                        a goal of trying to make the difference in fire and medical across the Unitied States. So far our team have 
                        visitied 5 states and have been to some states multiple times! We enjoy knowing that we can make an 
                        impact in a local community by getting these government contracts to support local areas.
                    </p>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Employees;