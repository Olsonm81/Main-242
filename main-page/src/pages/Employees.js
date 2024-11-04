/*By Matthew Olson CSCE 242*/
import "../css/Employees.css";

const importAll = (resource) => {
    return resource.keys().map(resource);
};

const Employees = () => {
    /*Imports all the images from the file about*/
    const employee = importAll(
        require.context("../images/About", false, /\.(png|jpe?g|svg$)/)
    );

    /*About section talks about the team and shows the team in action*/
    /*Working to add individual pictures and descriptions of all of the employees*/
    return (
        
        <>
            <div id="employee-section">
            <div class="employee-info">
                
                <h2><strong>Meet the Team!</strong></h2>
                <div id="team-info">
                    <img src={employee[0]} alt={employee[0]} width="400" height="300"></img>
                    <p>We are a vast and hardworking team who gets the job done. We are currently comprised of 20 employees.
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