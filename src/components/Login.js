import { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";
import Errors from "./Errors";

function Login(){
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const history = useHistory();
    const location = useLocation();

    const {state: {from} = {from: '/'}} = location;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await auth.authenticate(username, password);
            history.push(from);
        }catch(error){
            setErrors([error.message]);
        }
    };

    return(
        <div className="panel-child">
            <h1>Login</h1>
            <Errors errors={errors} />
            <form onSubmit={handleSubmit} className="form-login">
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="buttons">
                    <button type="submit">Login</button>
                    <Link to={from} className="cancelbutton">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;