import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const Navigation = ({ user }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        { user.name }
      </Typography>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = (state) => {
  const { isLogged, user } = state.loginReducer;
  return {
    isLogged,
    user,
  };
};

export default connect(mapStateToProps)(Navigation);
