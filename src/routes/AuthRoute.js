import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = ({ isLogged, children, ...rest }) => (
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

const mapStateToProps = (state) => {
  const { isLogged } = state.loginReducer;
  return {
    isLogged,
  };
};

export default connect(mapStateToProps)(AuthRoute);
