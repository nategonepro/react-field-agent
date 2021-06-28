import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import MainMenu from './components/MainMenu';
import DisplayPanel from './components/DisplayPanel';
import AuthContext from './components/AuthContext';

import {useState} from 'react';

function App() {
  const [user, setUser] = useState(null);

  const login = (token) => {
    const {id, sub: username, roles: rolesString} = jwt_decode(token);
    const roles = rolesString.split(',');

    const user = {
      id,
      username,
      roles,
      token,
      hasRole(role){
        return this.roles.includes(role);
      }
    };

    setUser(user);
  };

  const authenticate = async (username, password) => {
    const response = await fetch('http://localhost:5000/authenticate', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if(response.status === 200){
      const { jwt_token } = await response.json();
      login(jwt_token);
    }else if(response.status === 403){
      throw new Error('Bad username or password');
    }else{
      throw new Error('There was a problem logging in...');
    }
  };

  const logout = () => {
    setUser(null);
  }

  const auth = {
    user,
    login,
    authenticate,
    logout
  };

  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <Router>
          <MainMenu/>
          <Switch>
            <Route path="/agents/add">
              {user ?
                <DisplayPanel curDisplay={2} /> :
                <Redirect to="/login" />
              }
            </Route>
            <Route path="/agents/edit/:id">
              {user ?
                <DisplayPanel curDisplay={2} /> :
                <Redirect to="/login" />
              }
            </Route>
            <Route path="/agents/delete/:id">
              {user ?
                <DisplayPanel curDisplay={2} /> :
                <Redirect to="/login" />
              }
            </Route>
            <Route path="/agents">
              {user ?
                <DisplayPanel curDisplay={1} /> :
                <Redirect to="/login" />
              }
            </Route>
            <Route path="/login">
              <DisplayPanel curDisplay={4}/>
            </Route>
            <Route path="/register">
              <DisplayPanel curDisplay={5}/>
            </Route>
            <Route exact path="/">
              <DisplayPanel curDisplay={3}/>
            </Route>
            <Route path="*">
              <DisplayPanel curDisplay={0}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
