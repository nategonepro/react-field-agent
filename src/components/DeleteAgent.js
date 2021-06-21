import React from 'react';

function DeleteAgent({setExtraMenus, deleteById, agentId}){
    return (
        <div className="delete-agent">
            <p>Are you sure you want to delete this agent?</p>
            <div className="buttons">
                <button onClick={() => deleteById(agentId)}>yes</button>
                <button onClick={() => setExtraMenus(0)}>no</button>
            </div>
        </div>
    );
}

export default DeleteAgent;