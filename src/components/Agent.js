import React, {useState} from 'react';

import './styles/Agent.css';

import UpdateAgent from './UpdateAgent';
import DeleteAgent from './DeleteAgent';
import ExpandAgent from './ExpandAgent';

function Agent({agent, deleteById, updateAgent}) {
    
    const [extraMenus, setExtraMenus] = useState(0);

    const getExtraMenus = () => {
        switch(extraMenus){
            case 1:
                return <UpdateAgent agent={agent} setExtraMenus={setExtraMenus} updateAgent={updateAgent} />;
            case 2:
                return <DeleteAgent setExtraMenus={setExtraMenus} deleteById={deleteById} agentId={agent.agentId} />;
            case 3:
                return <ExpandAgent agent={agent} setExtraMenus={setExtraMenus} />
            default:
                return;
        }
    }

    return (
        <div className="agent">
            <p>{agent.firstName} {agent.lastName}</p>
            <div className="agent-controls">
                <p onClick={() => setExtraMenus(3)}>Expand</p>
                <p onClick={() => setExtraMenus(1)}>Edit</p>
                <p onClick={() => setExtraMenus(2)}>Delete</p>
            </div>
            {getExtraMenus()}
        </div>
    );
}

export default Agent;