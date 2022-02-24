import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './pages/Login';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    {/* <Route path="/signup">
          <Signup />
        </Route> */}
    <Route exact path="/login">
      <Login />
    </Route>
  </Switch>
);

export default Routes;
