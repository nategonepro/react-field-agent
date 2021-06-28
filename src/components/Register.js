import {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Errors from './Errors';
import AuthContext from './AuthContext';

function Register(){
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/create_account', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if(response.status === 201){
                try {
                    await auth.authenticate(username, password);
                    history.push('/');
                }catch(error){
                    setErrors([error.message]);
                }
            }else if(response.status === 400){
                const {messages} = await response.json();
                setErrors(messages);
            }else{
                throw new Error('Shoot! Something unexpected went wrong :(');
            }
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div className="panel-child">
            <h1>Register</h1>
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
                    <button type="submit">Register</button>
                    <Link to={'/login'} className="cancelbutton">I already have a login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;