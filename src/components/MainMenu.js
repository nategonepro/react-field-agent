import {useContext} from 'react';
import './styles/MainMenu.css';

import {Link, useHistory} from 'react-router-dom';
import AuthContext from './AuthContext';

function MainMenu(){
    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        auth.logout();
        history.push('/');
    };

    return (
        <div id="cont-menu">
            <Link to="/agents" className="menuitem">Display Agents</Link>
            <Link to="/agents/add" className="menuitem">Add Agent</Link>
            {auth.user ?
                (
                <>
                    <p onClick={handleLogout} className="menuitem">Logout <strong>{auth.user.username}</strong></p>
                </>
                )
                :
                (
                    <>
                        <Link to="/login" className="menuitem">Login</Link>
                        <Link to="/register" className="menuitem">Register</Link>
                    </>
                )
            }
        </div>
    );
}

export default MainMenu;