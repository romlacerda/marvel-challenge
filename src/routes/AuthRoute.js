import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = ({ children, ...rest }) => {
  const isLogged = Boolean(localStorage.getItem('isLogged'));
  console.log(isLogged);
  return (

    <Route
      {...rest}
      render={
        () => (isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ))
    }
    />
  );
};
export default AuthRoute;
