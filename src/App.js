import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AppointmentMain from './components/AppointmentMain/AppointmentMain/AppointmentMain';


function App() {
  
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <AppointmentMain />
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
