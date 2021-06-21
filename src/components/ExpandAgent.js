import React from 'react';

function ExpandAgent({agent, setExtraMenus}){
    return (
        <div className="expand-agent">
            <p>{agent.lastName}, {agent.firstName} {agent.middleName}</p>
            <p>Date of Birth: {agent.dob}</p>
            <p>Height in Inches: {agent.heightInInches}</p>
            <div className="buttons">
                <button onClick={() => setExtraMenus(0)}>Close</button>
            </div>
        </div>
    );
}

export default ExpandAgent;