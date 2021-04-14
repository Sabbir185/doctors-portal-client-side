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
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';

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

          <Route path="/dashboard/appointment">
            <DashBoard />
          </Route>

          <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>

          <Route path="/doctor/addADoctor">
            <AddDoctor></AddDoctor>
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
