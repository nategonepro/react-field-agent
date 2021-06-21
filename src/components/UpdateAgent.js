import React, {useState} from 'react';

function UpdateAgent({agent, setExtraMenus,  updateAgent}){

    const [curAgent, setCurAgent] = useState(agent);

    const handleChange = (evt) => {
        let newAgent = {...curAgent};

        newAgent[evt.target.name] = evt.target.value;

        setCurAgent(newAgent);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        updateAgent(curAgent);

        setExtraMenus(0);
    };

    return (
        <div className="update-agent">
            <form className="agent-fields" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="first-name">First Name: </label>
                    <input type="text" id="first-name" value={curAgent.firstName} name="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="middle-name">Middle Name: </label>
                    <input type="text" id="middle-name" value={curAgent.middleName} name="middleName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name: </label>
                    <input type="text" id="last-name" value={curAgent.lastName} name="lastName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="date-of-birth">Date of Birth: </label>
                    <input type="date" id="date-of-birth" value={curAgent.dob} name="dob" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="height">Height in Inches: </label>
                    <input type="number" id="height" value={curAgent.heightInInches} name="heightInInches" onChange={handleChange} />
                </div>
                <div className="buttons">
                    <button type="submit">Submit</button>
                    <button onClick={() => setExtraMenus(0)}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateAgent;