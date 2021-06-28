import {Link} from 'react-router-dom';

function Welcome(){
    return(
        <div className="panel-child">
            <h1>Welcome to React Field Agent!</h1>
            <Link to="/agents" className="menuitem">View Agents</Link>
        </div>
    );
}

export default Welcome;