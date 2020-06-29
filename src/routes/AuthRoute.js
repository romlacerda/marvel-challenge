import React from 'react';
import { Route } from 'react-router';
import Login from '../pages/Login';

const AuthRoute = ({ children, ...rest }) => {
  const isLogged = localStorage.getItem('isLogged');
  return (

    <Route
      {...rest}
      render={
        () => (isLogged == 'true' ? (
          children
        ) : (
          <Route {...rest} component={Login} />
        ))
    }
    />
  );
};
export default AuthRoute;
