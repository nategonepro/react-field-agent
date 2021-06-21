import React from 'react';

import './styles/DisplayPanel.css';

import DisplayAgents from './DisplayAgents';
import AddAgent from './AddAgent';

function DisplayPanel({curDisplay, setCurDisplay, agents, addNewAgent, deleteById, updateAgent}){

    const getCurDisplay = () => {
        switch(curDisplay){
            case 1:
                return <DisplayAgents agents={agents} deleteById={deleteById} updateAgent={updateAgent} />;
            case 2:
                return <AddAgent addNewAgent={addNewAgent} setCurDisplay={setCurDisplay}/>
            default:
                return;
        }
    }

    return (
        <div id="cont-display">
            {getCurDisplay()}
        </div>
    );
}

export default DisplayPanel;