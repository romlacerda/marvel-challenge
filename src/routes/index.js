import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthRoute from './AuthRoute';
import Template from '../template';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <AuthRoute path="/" exact>
        <Template>
          <Home />
        </Template>
      </AuthRoute>
    </Switch>
  </BrowserRouter>
);

export default Routes;
