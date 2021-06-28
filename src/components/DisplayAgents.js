import {useState, useEffect} from 'react';
import Agent from './Agent';

function DisplayAgents(){
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/agent")
            .then(response => {
                if(response.status !== 200){
                    return Promise.reject("Failed to fetch agents");
                }
                return response.json();
            })
            .then(json => setAgents(json))
            .catch(console.log);
    }, []);

    const updateAgent = (agent) => {
        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(agent)
        };

        fetch(`http://localhost:8080/api/agent/${agent.agentId}`, init)
            .then(response => {
                if(response.status === 404){
                console.log("Agent not found.");
                }else if(response.status === 204){
                console.log("Agent updated!");
                let newAgents = [...agents];
                for(let i=0; i<newAgents.length; i++){
                    if(newAgents[i].agentId === agent.agentId){
                    newAgents[i].firstName = agent.firstName;
                    newAgents[i].middleName = agent.middleName;
                    newAgents[i].lastName = agent.lastName;
                    newAgents[i].dob = agent.dob;
                    newAgents[i].heightInInches = agent.heightInInches;
                    }
                }
                setAgents(newAgents);
                }else{
                console.log(`Agent id ${agent.agentId} update failed with status ${response.status}`);
                }
            });
    };

    const deleteById = (agentId) => {
        fetch(`http://localhost:8080/api/agent/${agentId}`, {method: "DELETE"})
            .then(response => {
                if(response.status === 204){
                setAgents(agents.filter(a => a.agentId !== agentId));
                }else if(response.status === 404){
                    return Promise.reject("Agent not found.");
                }else{
                    return Promise.reject(`Delete failed with status: ${response.status}`);
                }
            })
            .catch(console.log);
    };

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