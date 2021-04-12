import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AppointmentMain from './components/AppointmentMain/AppointmentMain/AppointmentMain';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <AppointmentMain />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
