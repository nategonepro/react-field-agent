import React from 'react';
import Agent from './Agent';

function DisplayAgents({agents, deleteById, updateAgent}){
    return (
        <div className="panel-child">
            <h1>Agents</h1>
            {agents.map(agent => {
                    return <Agent agent={agent} key={agent.agentId} deleteById={deleteById} updateAgent={updateAgent} />;
            })}
        </div>
    );
}

export default DisplayAgents;