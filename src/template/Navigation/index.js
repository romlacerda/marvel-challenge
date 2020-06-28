import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import {
  Avatar, Box, Toolbar, Typography, Grid, IconButton,
} from '@material-ui/core';
import StyledAppBar from '../../components/AppBar/style';
import { logout } from '../../actions/loginActions';

const Navigation = ({ user, isLogged, setLogout }) => {
  const history = useHistory();

  function handleLogout() {
    setLogout();
  }

  useEffect(() => {
    if (!isLogged) {
      history.push('/login');
    }
  }, [isLogged]);

  return (
    <StyledAppBar position="absolute" color="transparent">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <Box mt={1} display="flex">
              <Avatar alt={user.name} style={{ marginRight: '15px' }} />
              <Typography variant="h6" style={{ marginTop: '3px' }}>
                { user && user.name }
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={1}>
              <IconButton aria-label="logout" onClick={handleLogout}>
                <ExitToAppIcon color="secondary" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

const mapStateToProps = (state) => {
  const { isLogged, user } = state.loginReducer;
  return {
    isLogged,
    user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
