import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = (props) => {
  const { loggedIn } = props;
  console.log('props ', props);
  if (!loggedIn) {
    return <Redirect to="/login" loggedIn={loggedIn} />;
  }
  return <Redirect to="/" />;

  // return <Route {...props} />;
};

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

export default connect(mapStateToProps)(AuthRoute);
