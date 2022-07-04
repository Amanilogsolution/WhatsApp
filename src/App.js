import Sendmessage from './Components/Sendmessage';
import Login from './Components/Login/Login';
<<<<<<< HEAD
import Dashboard from './Components/Dashboard/Card'
function App() {
  return (
    <div className="App">
        <Sendmessage/>
        {/* <Dashboard /> */}
=======
import PrivatRoute from './Components/HOC/PrivateRoute';

import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <PrivatRoute exact path="/Sendmessage" component={Sendmessage}/>

        </Switch>
      </Router>

>>>>>>> a4faa275968c7033c4063c0111d2b2d85a656576
    </div>
  );
}

export default App;
