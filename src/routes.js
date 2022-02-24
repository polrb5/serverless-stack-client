import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MainLayout from './components/layout/MainLayout';

const Routes = () => (
  <Router>
    <Switch>
      <MainLayout>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route> */}
      </MainLayout>

      {/* <PrivateRoute exact path="/my-courses">
          <MyCourses />
        </PrivateRoute>
        <PrivateRoute exact path="/my-account">
          <MyAccount />
        </PrivateRoute>
        <PrivateRoute path="/course/:idCourse/:idSubmodule/:submodule">
          <Content />
        </PrivateRoute>
        <PrivateRoute exact path="/course/:idCourse">
          <Course />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Courses />
        </PrivateRoute>
      </MainLayout>
      <PrivateRoute path="/checkout/:idCourse">
        <CheckoutLayout>
          <Checkout />
        </CheckoutLayout>
      </PrivateRoute> */}
    </Switch>
  </Router>
);

export default Routes;
