import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import StyledAppBar from '../../components/AppBar/style';

const Navigation = ({ user }) => (
  <StyledAppBar position="absolute" color="transparent">
    <Toolbar>
      <Typography variant="h6">
        { user.name }
      </Typography>
    </Toolbar>
  </StyledAppBar>
);

const mapStateToProps = (state) => {
  const { isLogged, user } = state.loginReducer;
  return {
    isLogged,
    user,
  };
};

export default connect(mapStateToProps)(Navigation);
