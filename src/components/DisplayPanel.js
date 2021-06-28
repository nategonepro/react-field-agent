import React from 'react';

import './styles/DisplayPanel.css';

import DisplayAgents from './DisplayAgents';
import AddAgent from './AddAgent';
import NotFound from './NotFound';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';

function DisplayPanel({curDisplay, setCurDisplay}){

    const getCurDisplay = () => {
        switch(curDisplay){
            case 0:
                return <NotFound />
            case 1:
                return <DisplayAgents />;
            case 2:
                return <AddAgent setCurDisplay={setCurDisplay}/>
            case 3:
                return <Welcome />
            case 4:
                return <Login />
            case 5:
                return <Register />
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