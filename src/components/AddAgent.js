import React, {useState} from 'react';

import './styles/AddAgent.css';

function AddAgent({addNewAgent, setCurDisplay}) {

    const [agent, setAgent] = useState({firstName: "", middleName: "", lastName: "", dob: "", heightInInches: undefined});

    const handleChange = (evt) => {
        let newAgent = {...agent};
        
        newAgent[evt.target.name] = evt.target.value;

        setAgent(newAgent);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        addNewAgent(agent);

        setCurDisplay(1);
    };

    return (
        <div className="panel-child">
            <h1>Add Agent</h1>
            <form className="agent-fields" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first-name">First Name: </label>
                    <input type="text" id="first-name" name="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="middle-name">Middle Name: </label>
                    <input type="text" id="middle-name" name="middleName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name: </label>
                    <input type="text" id="last-name" name="lastName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="date-of-birth">Date of Birth: </label>
                    <input type="date" id="date-of-birth" name="dob" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="height">Height in Inches: </label>
                    <input type="number" id="height" name="heightInInches" onChange={handleChange} />
                </div>
                <div className="buttons">
                    <button type="submit">Submit</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddAgent;