import Sendmessage from './Components/Sendmessage/Sendmessage';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Card';
import PrivatRoute from './Components/HOC/PrivateRoute';

import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <PrivatRoute exact path="/Dashboard" component={Dashboard}/>
          <PrivatRoute exact path="/Send-Message" component={Sendmessage}/>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
