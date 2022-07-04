import Sendmessage from './Components/Sendmessage';
import Login from './Components/Login/Login';
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

    </div>
  );
}

export default App;
