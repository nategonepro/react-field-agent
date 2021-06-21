import React from 'react';
import './styles/MainMenu.css';

function MainMenu({setCurDisplay}){
    return (
        <div id="cont-menu">
            <p className="menuitem" onClick={() => setCurDisplay(1)} >Display Agents</p>
            <p className="menuitem" onClick={() => setCurDisplay(2)} >Add Agent</p>
        </div>
    );
}

export default MainMenu;