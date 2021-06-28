import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Errors from './Errors';

import './styles/AddAgent.css';

function AddAgent() {

    const [agent, setAgent] = useState({firstName: "", middleName: "", lastName: "", dob: "", heightInInches: undefined});
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    const handleChange = (evt) => {
        let newAgent = {...agent};
        
        newAgent[evt.target.name] = evt.target.value;

        setAgent(newAgent);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        addNewAgent(agent);
    };

    const addNewAgent = (agent) => {
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(agent)
        };

        fetch("http://localhost:8080/api/agent", init)
            .then(response => {
                if(response.status === 201 || response.status === 400){
                    return response.json();
                }else{
                    return Promise.reject("response is not 200 OK");
                }
            })
            .then(data => {
                if(data.agentId){
                    history.push('/agents');
                }else{
                    setErrors(data);
                }
            })
            .catch(console.log);
    };

    return (
        <div className="panel-child">
            <h1>Add Agent</h1>
            <Errors errors={errors} />
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
                    <Link to="/agents" className="cancelbutton">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default AddAgent;